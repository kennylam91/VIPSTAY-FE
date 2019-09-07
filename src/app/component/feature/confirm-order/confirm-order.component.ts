import {Component, OnInit} from '@angular/core';
import {IHouse} from '../../../model/IHouse';
import {HouseService} from '../../../services/house.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OrderHouse} from '../../../model/OrderHouse';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {
  orderForm: FormGroup;
  cost: number;
  numberNights: number;
  orderHouse = new OrderHouse();
  id: number;
  // checkin: Date;
  // checkout: Date;

  house: IHouse = {
    id: 0,
    houseName: '',
    category: '',
    address: '',
    bedroomNumber: 0,
    bathroomNumber: 0,
    price: 0,
    description: '',
    imageUrls: [],
    rate: 0,
    area: 0,
    orderHouses: []
  };

  constructor(private houseService: HouseService,
              private route: ActivatedRoute,
              private router: Router) {
    this.orderForm = new FormGroup({
      checkin: new FormControl('', [Validators.required]),
      checkout: new FormControl('', [Validators.required]),
      numberGuest: new FormControl('', [Validators.required, Validators.min(1)])
    });
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.houseService.getHouseById(this.id)
      .subscribe(
        next => {
          this.house = next.data;
          this.orderForm.patchValue(this.houseService.order);
          this.numberNights = this.getNumberDay();
          this.cost = this.house.price * this.numberNights;
          console.log(next.data);
        },
        error => {
          console.log(error);
          this.house = null;
        });
  }

  getNumberDay() {
    const checkin = new Date(this.orderForm.value.checkin);
    const checkout = new Date(this.orderForm.value.checkout);
    const DAY = 86400 * 1000;
    this.numberNights = Math.round((checkout.getTime() - checkin.getTime()) / DAY);
    return this.numberNights;
  }

  onChange() {
    this.cost = this.house.price * this.getNumberDay();
  }

  booking() {
    if (this.orderForm.valid) {
      this.orderHouse.orderTime = new Date();
      this.orderHouse.cost = this.cost;
      this.orderHouse.checkin = new Date(this.orderForm.value.checkin);
      this.orderHouse.checkout = new Date(this.orderForm.value.checkout);
      this.houseService.bookingHouse(this.orderHouse, this.house.id).subscribe(
        next => {
          if (next.success) {
            alert(next.message);
            this.router.navigateByUrl('/me/orders');
          } else {
            alert(next.message);
          }

        }
      );
    } else {
      alert('Bạn chưa điền đủ thông tin đặt nhà');
    }
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return true;
  };
}
