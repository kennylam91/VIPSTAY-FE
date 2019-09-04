import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';

function convertStringToArray(str: string): string[] {
  let arr: string[] = [];
  let temp1 = str.replace('[', '');
  let temp2 = temp1.replace(']', '');
  let temp3 = temp2.replace('"', '');
  let temp4 = temp3.replace('"', '');
  let temp5 = temp4.replace('"', '');
  let temp6 = temp5.replace('"', '');
  let temp7 = temp6.replace(' ', '');
  arr = temp7.split(',');
  console.log(arr);
  return arr;
}

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
    this.router.navigateByUrl('login', {skipLocationChange: false});
    // this.router.navigate(['login'], {skipLocationChange: false});
    return false;
  }

}
