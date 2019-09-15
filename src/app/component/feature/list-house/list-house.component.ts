import {Component, OnInit} from '@angular/core';
import {IHouse} from '../../../model/IHouse';
import {HouseService} from '../../../services/house.service';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.css']
})
export class ListHouseComponent implements OnInit {

  bestChoiceHouses: IHouse[] = [];
  bestSaleoffHouses = this.bestChoiceHouses;
  suggestionHouses = this.bestChoiceHouses;

  constructor(private houseService: HouseService,
              private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
    this.houseService.getHouses()
      .subscribe(next => {
        this.bestChoiceHouses = next.data;
        console.log(next);
      });
  }

  update(houses: IHouse[]) {
    this.bestChoiceHouses = houses;
    console.log(this.bestChoiceHouses.length);
  }
}
