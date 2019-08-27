import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {IUser} from '../../../model/IUser';
import {ajaxGetJSON} from 'rxjs/internal-compatibility';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      id: [Math.round(Math.random() * 100)],
      email: ['tranthanhhieuthao@gmail.com', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['Ha Noi', Validators.required],
      age: ['23', [Validators.required, Validators.min(18)]],
      type: ['Nam', Validators.required],
      phone: ['+840374006604', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]],
      role: ['user', Validators.required],
      name: ['hieu', Validators.required],
      idNumber: ['123456', Validators.required],
      avatar: ['sdf', Validators.required],
      username: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    this.userService.registerGuest(this.registerForm.value)
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
