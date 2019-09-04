import {Component, OnInit} from '@angular/core';
import {IHouse} from '../../../model/IHouse';
import {HostService} from '../../../services/host.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-list-house-host',
  templateUrl: './list-house-host.component.html',
  styleUrls: ['./list-house-host.component.css']
})
export class ListHouseHostComponent implements OnInit {
  houses: IHouse[];

  constructor(private hostService: HostService,
              private router: Router) {
  }

  ngOnInit() {
    this.hostService.getHouses().subscribe(
      next => this.houses = next.data,
      error => {
        console.log(error);
        console.log(error.status);
        if (error.status == 401) {
          alert('Bạn chưa đăng nhập');
          this.router.navigateByUrl('/login');
        }
      }
    );
  }
}
