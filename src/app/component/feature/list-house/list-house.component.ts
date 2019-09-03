import {Component, OnInit} from '@angular/core';
import {IHouse} from '../../../model/IHouse';
import {HouseService} from '../../../services/house.service';

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.css']
})
export class ListHouseComponent implements OnInit {

  bestChoiceHouses: IHouse[];
  bestSaleoffHouses = this.bestChoiceHouses;
  suggestionHouses = this.bestChoiceHouses;


  constructor(private houseService: HouseService) {

  }

  ngOnInit() {
    this.houseService.getHouses()
      .subscribe(next => {
        this.bestChoiceHouses = next.data;
        console.log(next);
      });
  }
}
