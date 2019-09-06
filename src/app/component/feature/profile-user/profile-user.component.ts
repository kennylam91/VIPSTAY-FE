import {Component, OnInit} from '@angular/core';
import {UserProfileService} from '../../../services/user-profile.service';
import {IUser} from '../../../model/IUser';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  username: string;
  user: Partial<IUser>;
  oldPasword: string;
  status: string;
  loginForm: FormGroup;

  constructor(private  userProfileService: UserProfileService, private  route: ActivatedRoute, private router: Router,
              private formBuilder: FormBuilder, private authenService: AuthenticationService) {
  }

  ngOnInit() {
    this.username = localStorage.getItem('currentUser');
    this.userProfileService.getUserByid().subscribe(data => {
      this.user = data;
    });
  }

  updateProfile() {
    this.userProfileService.confirmPaswordUser(this.oldPasword + '').subscribe(next => {
      this.status = next.message;
      this.user.password = this.oldPasword;
    });
    if (this.status === 'confirm Succssess') {
      alert('xác nhận thành công');
      this.userProfileService.updateUser(this.user).subscribe(data => {
          alert('Ban da update thanh cong');
          this.username = data.username;
          //Tạo form đem vào service login để lấy token mới
          this.loginForm = this.formBuilder.group({
              username: [data.username, Validators.required],
              password: [this.oldPasword, Validators.required]
            }
          );
          //Lấy lại token mới
          this.authenService.authenticate(this.loginForm.value).subscribe(
            next => {
              localStorage.setItem('token', next.data.token);
              localStorage.setItem('currentUser', next.data.username);
            },
            error1 => {
              console.log(error1);
            });
        }, error => {
          console.log('error');
        }
      );
    } else {
      alert('Bạn nhập mật khẩu hiện tại không chính xác');
    }


  }
}
