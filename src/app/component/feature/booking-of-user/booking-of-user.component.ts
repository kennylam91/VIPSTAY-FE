import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-booking-of-user',
  templateUrl: './booking-of-user.component.html',
  styleUrls: ['./booking-of-user.component.css']
})
export class BookingOfUserComponent implements OnInit {
  public dateValue: Date = new Date('02/09/2019');

  constructor() {
  }

  ngOnInit() {
  }

}
