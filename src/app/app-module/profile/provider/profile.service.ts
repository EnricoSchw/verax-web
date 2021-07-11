import { Injectable } from '@angular/core';
import { Profile } from '../entity/profile';
import { ProfileStore } from '../store/ProfileStore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private db: ProfileStore) {
  }

  public save(profile: Profile): void {
    this.db.save(profile);
  }

  public update(profile: Profile): void {
    this.db.update(profile);
  }

  public hasProfile(): Observable<boolean> {
    return this.db.hasCurrent();
  }

  public fetchMyProfile(): Observable<Profile | undefined> {
    return this.db.fetchCurrent();
  }
}
