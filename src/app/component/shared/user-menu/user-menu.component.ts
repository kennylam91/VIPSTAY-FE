import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IUser} from '../../../model/IUser';
import {UserProfileService} from '../../../services/user-profile.service';

declare function convertStringToArray(str);

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  username: string;
  user: IUser;
  roles: string[] = [];

  constructor(private router: Router,
              private userProfileService: UserProfileService) {
  }

  ngOnInit() {
    this.username = localStorage.getItem('currentUser');
    if (this.username) {
      this.userProfileService.getUserCurrent().subscribe(
        next => this.user = next,
        error => console.log(error)
      );
    }
    this.roles = convertStringToArray(localStorage.getItem('roles'));
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
