import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-for-host',
  templateUrl: './header-for-host.component.html',
  styleUrls: ['./header-for-host.component.css']
})
export class HeaderForHostComponent implements OnInit {

  username: string;
  constructor() { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }
}
