import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-for-host',
  templateUrl: './header-for-host.component.html',
  styleUrls: ['./header-for-host.component.css']
})
export class HeaderForHostComponent implements OnInit {

  username: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.username = localStorage.getItem('currentUser');
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
