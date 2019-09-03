import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../services/order.service';
import {OrderHouse} from '../../../model/OrderHouse';
import {IHouse} from '../../../model/IHouse';


@Component({
  selector: 'app-booking-of-user',
  templateUrl: './booking-of-user.component.html',
  styleUrls: ['./booking-of-user.component.css']
})
export class BookingOfUserComponent implements OnInit {
  username: string;
  ArrayOrder: Array<any> = [];


  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getlistHouseOfHost().subscribe(data => {
      for (let i = 0; i < data.data.length; i++) {
        this.orderService.getHouseOrderByUser(data.data[i].id).subscribe(next => {
          if (next.data.length !== 0) {
            this.ArrayOrder.push(next.data);
          }
        });
      }
    });
    this.username = localStorage.getItem('currentUser');
  }

}
