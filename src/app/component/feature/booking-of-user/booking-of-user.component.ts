import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../services/order.service';
import {OrderHouse} from '../../../model/OrderHouse';
import {IHouse} from '../../../model/IHouse';
import {ActivatedRoute, Router} from '@angular/router';
import {IUser} from '../../../model/IUser';



@Component({
  selector: 'app-booking-of-user',
  templateUrl: './booking-of-user.component.html',
  styleUrls: ['./booking-of-user.component.css']
})
export class BookingOfUserComponent implements OnInit {
  username: string;
  userOrder: OrderHouse[];
  status: Array<any> = [];


  constructor(private orderService: OrderService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.username = localStorage.getItem('currentUser');
    this.orderService.getHouseOrderByUser(id).subscribe(data => {
      this.userOrder = data.data;
      this.status = data.data;
      console.log(this.status);
      console.log(this.userOrder[10].house.houseName);
    });
  }
}
