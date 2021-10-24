import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from '../profile/provider/profile.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CallGuard implements CanActivate {

  constructor(private profileService: ProfileService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.profileService.hasProfile().pipe(tap((hasProfile) => {
        if (!hasProfile) {
          this.router.navigateByUrl('/');
        }
      })
    );
  }
}
