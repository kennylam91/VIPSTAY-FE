import {Component, OnInit} from '@angular/core';
import {UserProfileService} from '../../../services/user-profile.service';
import {ActivatedRoute} from '@angular/router';
import {IUser} from '../../../model/IUser';


@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent implements OnInit {
  username: string;
  passwordOld: string;
  user: Partial<IUser>;
  id: number;

  constructor(private  userProfileService: UserProfileService, private  route: ActivatedRoute) {
  }

  ngOnInit() {
    this.username = localStorage.getItem('currentUser');
    this.userProfileService.getAllUser().subscribe(data => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i <= data.length; i++) {
        if (data[i].username === this.username) {
          this.id = i + 1;
          // alert(i);
          console.log(data[i]);
          this.userProfileService.getUserByid(this.id).subscribe(data1 => {
            this.user = data1;
            this.passwordOld = data1.password;
            console.log(data1);
          });
          break;
        }
      }
    });
  }

  updateProfile() {
    this.userProfileService.updateUser(this.user).subscribe(data => {
        alert('Ban da update thanh cong');
        this.username = data.username;
        localStorage.setItem('currentUser', data.username);
        console.log(this.user);
        // console.log('sua thanh cong');
      }, error => {
        console.log('error');
      }
    );
  }

}
