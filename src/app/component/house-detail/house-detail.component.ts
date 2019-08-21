import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../house.service';
import {House} from '../../model/House';


@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  listHouse: House[];

  constructor(private houseService: HouseService) {
    this.listHouse = houseService.listHouse;
  }

  ngOnInit() {
  }

}
