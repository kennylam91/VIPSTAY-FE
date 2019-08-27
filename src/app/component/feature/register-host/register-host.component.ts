import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';

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

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
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
      role: ['admin', Validators.required],
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
    this.userService.registerHost(this.registerForm.value)
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


