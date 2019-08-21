import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../house.service';
import {IHouse} from '../../model/IHouse';


@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  listHouse: IHouse;
   time: Date = new Date();

  constructor(private houseService: HouseService) {
    this.listHouse = houseService.listHouse[0];
  }

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

}
