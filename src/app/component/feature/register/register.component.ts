import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';
import {IUser} from '../../../model/IUser';
import * as $ from 'jquery';

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user: Partial<IUser>;
  success: boolean;
  message: string;


  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: [''],
      pwGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]],
        confirmPassword: ['']
      }, {validator: comparePassword}),
      address: [''],
      age: [''],
      type: [''],
      phone: [''],
      role: [''],
      name: [''],
      idNumber: [''],
      avatar: [''],
      username: ['', [Validators.required, Validators.minLength(3),
        Validators.maxLength(50), Validators.pattern(/^[_A-z0-9]*[_A-z0-9]*$/)]],
    });

    this.user = {
      id: Math.round(Math.random() * 1000),
      username: '',
      password: '',
      name: 'user',
      email: 'dat' + Math.random() * 1000 + '@gmai.com',
    };
  }


  onSubmit() {
    console.log(this.user);
    if (this.registerForm.valid) {
      this.userService.registerGuest(this.user)
        .subscribe(
          next => {
            this.success = next.success;
            this.message = next.message;
            alert('Đăng ký tài khoản thành công');
            this.router.navigateByUrl('/login');
          },
          error => {
            console.log(error);
          }
        );
    }
  }

}
