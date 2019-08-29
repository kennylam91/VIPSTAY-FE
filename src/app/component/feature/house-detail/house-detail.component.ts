import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../../services/house.service';
import {IHouse} from '../../../model/IHouse';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  house: IHouse = {
    id: 0,
    houseName: '',
    houseType: '',
    address: '',
    bedroomNumber: 0,
    bathroomNumber: 0,
    price: 0,
    description: '',
    image: '',
    rate: 0,
    area: 0
  };

  time: Date = new Date();

  constructor(private houseService: HouseService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // setInterval(() => {
    //   this.time = new Date();
    // }, 1000);
    const id = +this.route.snapshot.paramMap.get('id');
    this.houseService.getHouseById(id)
      .subscribe(
        next => {
          this.house = next.data;
          console.log(next.data);
        },
        error => {
          console.log(error);
          this.house = null;
        });
  }

}
