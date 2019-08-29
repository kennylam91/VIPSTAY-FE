import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {IUser} from '../../../model/IUser';

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}


@Component({
  selector: 'app-register-host',
  templateUrl: './register-host.component.html',
  styleUrls: ['./register-host.component.css']
})
export class RegisterHostComponent implements OnInit {
  registerForm: FormGroup;
  user: Partial<IUser>;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
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
      username: '',
      password: '',
      name: 'dat' + Math.random() * 1000,
      email: 'dat' + Math.random() * 1000 + '@gmai.com',
    };
  }

  onSubmit() {
    // if (this.registerForm.invalid) {
    //   return;
    // }
    console.log(this.registerForm.value);
    this.userService.registerHost(this.user)
      .subscribe(
        data => {
          console.log('succsess');
          this.router.navigateByUrl('/login');
        },
        error => {
          console.log('error');
        }
      );
  }
}


