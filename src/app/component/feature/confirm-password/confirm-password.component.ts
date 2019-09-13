import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IUser} from '../../../model/IUser';
import {UserProfileService} from '../../../services/user-profile.service';
import {AuthenticationService} from '../../../services/authentication.service';

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css']
})
export class ConfirmPasswordComponent implements OnInit {
  username: string;
  registerForm: FormGroup;
  user: Partial<IUser>;
  oldPasword: string;
  newPassword: string;
  status: string;
  loginForm: FormGroup;

  constructor(private  userProfileService: UserProfileService, private  route: ActivatedRoute, private router: Router,
              private formBuilder: FormBuilder, private authenService: AuthenticationService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.username = localStorage.getItem('currentUser');
    this.registerForm = this.fb.group({
      confirm: ['', [Validators.required, Validators.minLength(6)]],
      pwGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      }, {validator: comparePassword}),
    });
    this.userProfileService.getUserCurrent().subscribe(data => {
      this.user = data;
    });
  }

  updatePassword() {
    this.user.password = this.oldPasword;
    this.userProfileService.confirmPaswordUser(this.oldPasword + '').subscribe(next => {
      this.status = next.message;
      if (this.status === 'confirm Succssess') {
        this.status = '';
        this.user.password = this.newPassword;
        this.userProfileService.updateUser(this.user).subscribe(data => {
          alert('Ban da update thanh cong');
          this.username = data.username;
          localStorage.setItem('currentUser', data.username);
          // Tạo form đem vào service login để lấy token mới
          this.loginForm = this.formBuilder.group({
            username: [data.username, Validators.required],
            password: [this.oldPasword, Validators.required]
          });
          // Lấy lại token mới
          this.authenService.authenticate(this.loginForm.value).subscribe(
            next1 => {
              localStorage.setItem('token', next1.data.token);
            });
        });
        return;
      }
      this.router.navigate(['/home-for-host']);
    });
    // alert('Bạn nhập mật khẩu hiện tại không chính xác');
  }
}
