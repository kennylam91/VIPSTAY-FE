import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';

declare function convertStringToArray(str);

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public authenService: AuthenticationService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authenService.isLoggedIn()) {
      const roles = convertStringToArray(localStorage.getItem('roles'));
      for (const role of roles) {
        if (route.data.roles && route.data.roles.indexOf(role) !== -1) {
          return true;
        }
      }
      this.router.navigateByUrl('403');
      return false;
    }
    console.log('Could not authenticate');
    this.router.navigate(['login'], {queryParams: {'redirectURL': state.url}});
    // this.router.navigateByUrl('login', {skipLocationChange: false});
    // this.router.navigate(['login'], {skipLocationChange: false});
    return false;
  }

}
