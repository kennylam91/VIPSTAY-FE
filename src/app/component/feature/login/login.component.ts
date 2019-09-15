import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';
import {error} from 'util';

function convertStringToArray(str: string): string[] {
  let arr: string[] = [];
  const temp1 = str.replace('[', '');
  const temp2 = temp1.replace(']', '');
  const temp3 = temp2.replace('"', '');
  const temp4 = temp3.replace('"', '');
  const temp5 = temp4.replace('"', '');
  const temp6 = temp5.replace('"', '');
  const temp7 = temp6.replace(' ', '');
  arr = temp7.split(',');
  console.log(arr);
  return arr;
}

export const API_BASE_URL = 'http://localhost:8080';
export const ACCESS_TOKEN = 'accessToken';

export const OAUTH2_REDIRECT_URI = 'http://localhost:4200/oauth2/redirect';

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  redirectURL: string;

  constructor(private formBuilder: FormBuilder,
              public authenService: AuthenticationService,
              private router: Router,
              private route: ActivatedRoute) {
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
        if (next.success) {
          console.log(next.data.roles[0].authority);
          const roles: string[] = [];
          for (const role of next.data.roles) {
            roles.push(role.authority);
          }
          localStorage.setItem('token', next.data.token);
          localStorage.setItem('currentUser', next.data.username);
          localStorage.setItem('roles', JSON.stringify(roles));
          const params = this.route.snapshot.queryParams;
          if (params.redirectURL) {
            this.redirectURL = params.redirectURL;
          }
          if (this.redirectURL) {
            this.router.navigateByUrl(this.redirectURL)
              .catch(() => this.router.navigate(['houses']));
          } else {
            this.router.navigate(['houses']);
          }
        } else {
          alert(next.message);
        }

      },
      error1 => {
        this.router.navigateByUrl('/login');
        console.log(error1);
      });
  }
}
