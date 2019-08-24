import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../house.service';
import {IHouse} from '../../model/IHouse';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  bestChoiceHouses: IHouse[];
  bestSaleoffHouses = this.bestChoiceHouses;
  suggestionHouses = this.bestChoiceHouses;


  constructor(private houseService: HouseService) {

  }

  ngOnInit() {
    this.houseService.getHouses()
      .subscribe(next => {
        this.bestChoiceHouses = next;
        console.log(next);
      });
  }

}
