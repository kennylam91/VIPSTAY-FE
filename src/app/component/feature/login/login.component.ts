import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';
import {error} from 'util';

function convertStringToArray(str: string): string[] {
  let arr: string[] = [];
  let temp1 = str.replace('[', '');
  let temp2 = temp1.replace(']', '');
  let temp3 = temp2.replace('"', '');
  let temp4 = temp3.replace('"', '');
  let temp5 = temp4.replace('"', '');
  let temp6 = temp5.replace('"', '');
  let temp7 = temp6.replace(' ', '');
  arr = temp7.split(',');
  console.log(arr);
  return arr;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public authenService: AuthenticationService, private router: Router) {
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
        console.log(next.data.roles[0].authority);
        let roles: string[] = [];
        for (let role of next.data.roles) {
          roles.push(role.authority);
        }
        localStorage.setItem('token', next.data.token);
        localStorage.setItem('currentUser', next.data.username);
        localStorage.setItem('roles', JSON.stringify(roles));
        console.log(convertStringToArray(JSON.stringify(roles))[0] + 'aaaaaaaa');
        console.log(convertStringToArray(JSON.stringify(roles))[1] + 'bbbbbbbbbb');
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
