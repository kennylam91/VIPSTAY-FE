import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../services/order.service';
import {IHouse} from '../../../model/IHouse';

@Component({
  selector: 'app-list-house-of-host',
  templateUrl: './list-house-of-host.component.html',
  styleUrls: ['./list-house-of-host.component.css']
})
export class ListHouseOfHostComponent implements OnInit {
  listHouseOfHost: IHouse[];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getlistHouseOfHost().subscribe(data => {
      this.listHouseOfHost = data.data;
      console.log(this.listHouseOfHost[7].imageUrls[0]);
    });
  }

}
