import {Component, OnInit} from '@angular/core';
import {OrderHouse} from '../../../model/OrderHouse';
import {OrderService} from '../../../services/order.service';

@Component({
  selector: 'app-home-for-guest',
  templateUrl: './home-for-guest.component.html',
  styleUrls: ['./home-for-guest.component.css']
})
export class HomeForGuestComponent implements OnInit {
  orders: OrderHouse[];
  day = 86400 * 1000;

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getOrders().subscribe(
      next => {
        console.log("haha");
        this.orders = next.data;
        for (let order of this.orders) {
          order.checkin = new Date(order.checkin);
          order.checkout = new Date(order.checkout);
        }
      }
    );
  }
}
