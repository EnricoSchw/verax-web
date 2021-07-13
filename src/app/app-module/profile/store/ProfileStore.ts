import Dexie from 'dexie';
import { Profile, ProfileType } from '../entity/profile';
import { IndexDB } from '../../store/IndexDB';
import { from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NoticeDialogComponent } from '../../alert/notice-dialog/notice-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ProfileStore extends Dexie {
  public profiles: Dexie.Table<Profile, number>; // id is number in this case

  public constructor(public dialog: MatDialog) {
    super(IndexDB.DB_NAME);
    this.version(1).stores({profiles: '++id,userName,publicName,type'});
    this.profiles = this.table('profiles');
  }

  save(profile: Profile): void {
    this.transaction('rw', this.profiles, async () => {
      // Make sure we have something in DB:
      if ((await this.profiles.where({userName: profile.userName}).count()) === 0) {
        const id = await this.profiles.add({...profile});
      }
    }).catch(e => {
      console.log(e.stack || e);
    });
  }

  update(profile: Profile): void {

    this.transaction('rw', this.profiles, async () => {
      // Make sure we have something in DB:
      if ((await this.profiles.where({id: profile.id}).count()) !== 0) {
        const id = await this.profiles.put({...profile}, profile.id);
        this.dialog.open(NoticeDialogComponent, {data: {type: 'success', msg: 'Updated profile!'}});
      }
    }).catch(e => {
      this.dialog.open(NoticeDialogComponent, {data: {type: 'fail', msg: 'Can not update profile!'}});
    });
  }

  isEmpty(): Observable<boolean> {
    return from(this.profiles.count().then((count) => count === 0));
  }

  hasCurrent(): Observable<boolean> {
    const transaction = this.transaction('r', this.profiles, async () => {
      return await this.profiles.where({type: ProfileType.CURRENT}).count() !== 0;
    });
    return from(transaction);
  }

  public fetch(): Observable<Profile> {
    const profilePromise = this.profiles.toArray().then((profiles) => profiles[0]);
    return from(profilePromise);
  }

  public fetchCurrent(): Observable<Profile | undefined> {
    const transaction = this.transaction('r', this.profiles, async () => {
      return await this.profiles.where({type: ProfileType.CURRENT}).first();
    });
    return from(transaction);
  }
}
