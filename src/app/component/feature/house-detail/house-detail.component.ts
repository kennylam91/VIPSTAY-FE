import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../../services/house.service';
import {ActivatedRoute} from '@angular/router';
import {IHouse} from '../../../model/IHouse';
import {StandardResponse} from '../../../model/StandardResponse';


@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  houseDetail: StandardResponse;


  time: Date = new Date();

  constructor(private houseService: HouseService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    setInterval(() => {
      this.time = new Date();
    }, 1000);
    const id = +this.route.snapshot.paramMap.get('id');
    this.houseService.getHouseById(id)
      .subscribe(
        data => {
          this.houseDetail = data;
          console.log(data);
          this.houseDetail.data = {
            id: data.data.id,
            houseName: data.data.houseName,
            houseType: data.data.houseType,
            address: data.data.address,
            bedroomNumber: data.data.bedroomNumber,
            bathroomNumber: data.data.bathroomNumber,
            price: data.data.price,
            description: data.data.description,
            image: data.data.image,
            rate: data.data.rate,
            area: data.data.area,
            status: data.data.status,
            user: data.data.user,
            category: data.data.category,
          };
        },
        error => {
          console.log(error);
          this.houseDetail = null;
        });
  }

}
