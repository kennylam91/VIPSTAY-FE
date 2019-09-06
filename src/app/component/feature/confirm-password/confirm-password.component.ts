import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css']
})
export class ConfirmPasswordComponent implements OnInit {
  username: string;

  constructor() {
  }

  ngOnInit() {
    this.username = localStorage.getItem('currentUser');
  }

}
