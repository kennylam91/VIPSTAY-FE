import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../house.service';
import {IHouse} from '../../model/IHouse';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  houses: IHouse[];

  constructor(private houseService: HouseService) {

  }

  ngOnInit() {
    this.houseService.getHouses()
      .subscribe(next => {
        this.houses = next;
      });
  }

}
