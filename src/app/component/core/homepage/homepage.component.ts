import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../../services/house.service';
import {StandardResponse} from '../../../model/StandardResponse';
import {IHouse} from '../../../model/IHouse';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  bestChoiceHouses: IHouse[];

  constructor(private houseService: HouseService) {
  }

  ngOnInit(): void {
    this.houseService.getHouses()
      .subscribe(next => {
        this.bestChoiceHouses = next.data;
      });
  }

}
