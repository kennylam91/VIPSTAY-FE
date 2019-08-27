import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../user.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {IUser} from '../../model/IUser';
import {ajaxGetJSON} from 'rxjs/internal-compatibility';
import {Observable} from 'rxjs';

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
      username: '',
      password: '',
      role: 'GUEST',
      name: '',
      age: 0,
      type: '',
      address: '',
      phone: '',
      email: '',
      idNumber: '',
      avatar: ''
    }
    ;
  }

  onChangeAvatar($event: string) {
    this.user.avatar = $event;
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.userService.register(this.user)
      .subscribe(
        data => {
          console.log('success');
          alert('Đăng ký thành công');
          this.router.navigate(['/login']);
        },
        error => {
          console.log('error');
        }
      );
  }
}
