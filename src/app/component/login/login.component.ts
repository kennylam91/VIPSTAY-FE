import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../authentication.service';
import {Router} from '@angular/router';

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
    console.log('Log in');
    console.log(JSON.stringify(this.loginForm.value));
    this.authenService.login(this.loginForm.value).subscribe(
      next => {
        this.authenService.token = next.token;
        console.log(this.authenService.token);
        if (this.authenService.token) {
          this.router.navigateByUrl('');
        }
      }
    );

  }
}
