import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';
import {error} from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authenService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
  }

  login() {
    console.log(JSON.stringify(this.loginForm.value));
    console.log(this.loginForm.value);
    this.authenService.authenticate(this.loginForm.value).subscribe(
      next => {
        localStorage.setItem('token', next.data.token);
        localStorage.setItem('currentUser', next.data.username);
        // localStorage.setItem('currentPassword', next.data.password);
        if (next.data.token) {
          this.router.navigateByUrl('houses');
        }
      },
      error1 => {
        this.router.navigateByUrl('/login');
        console.log(error1);
      });
  }
}
