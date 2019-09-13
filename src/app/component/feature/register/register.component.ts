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
      email: ['', [Validators.required, Validators.email]],
      pwGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['']
      }, {validator: comparePassword}),
      address: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      type: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]],
      role: ['', Validators.required],
      name: ['', Validators.required],
      idNumber: ['', Validators.required],
      avatar: ['', Validators.required],
      username: ['', Validators.required],
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
    // if (this.registerForm.invalid) {
    //   return;
    // }
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
