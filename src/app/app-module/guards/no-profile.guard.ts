import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from '../profile/provider/profile.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoProfileGuard implements CanActivate {
  constructor(private profileService: ProfileService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.profileService.hasProfile().pipe(
      map((hasProfile) => !hasProfile),
      tap((hasNoProfile) => {
        if (!hasNoProfile) {
          this.router.navigateByUrl('/');
        }
      })
    );
  }

}
