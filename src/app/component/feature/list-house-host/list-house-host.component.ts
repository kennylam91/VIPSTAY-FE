import {Component, OnInit} from '@angular/core';
import {IHouse} from '../../../model/IHouse';
import {HostService} from '../../../services/host.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-house-host',
  templateUrl: './list-house-host.component.html',
  styleUrls: ['./list-house-host.component.css']
})
export class ListHouseHostComponent implements OnInit {
  houses: IHouse[];

  constructor(private hostService: HostService) {
  }

  ngOnInit() {
    this.hostService.getHouses().subscribe(
      next => this.houses = next.data,
      error => console.log(error)
    );
  }
}
