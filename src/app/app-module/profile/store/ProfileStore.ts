import Dexie from 'dexie';
import { Profile } from '../entity/profile';
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
    this.version(1).stores({
      profiles: '++id,userName,publicName'
    });
    this.profiles = this.table('profiles');
  }

  save(profile: Profile): void {
    this.transaction('rw', this.profiles, async () => {
      // Make sure we have something in DB:
      if ((await this.profiles.where({userName: profile.userName}).count()) === 0) {
        const id = await this.profiles.add(
          {userName: profile.userName, publicName: profile.publicName}
        );
        console.log(`Added profile with id ${id}`);
      }
    }).catch(e => {
      console.log(e.stack || e);
    });
  }

  update(profile: Profile): void {

    this.transaction('rw', this.profiles, async () => {
      // Make sure we have something in DB:
      if ((await this.profiles.where({id: profile.id}).count()) !== 0) {
        const id = await this.profiles.put(
          {id: profile.id, userName: profile.userName, publicName: profile.publicName},
          profile.id
        );
        this.dialog.open(NoticeDialogComponent, {data: {type: 'success', msg: 'Updated profile!'}});
      }
    }).catch(e => {
      this.dialog.open(NoticeDialogComponent, {data: {type: 'fail', msg: 'Can not update profile!'}});
    });
  }

  isEmpty(): Observable<boolean> {
    return from(this.profiles.count().then((count) => count === 0));
  }

  public fetch(): Observable<Profile> {
    const profilePromise = this.profiles.toArray().then((profiles) => profiles[0]);
    return from(profilePromise);
  }
}
