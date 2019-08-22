import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../house.service';
import {IHouse} from '../../model/IHouse';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  house: IHouse;
  time: Date = new Date();

  constructor(private houseService: HouseService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
    const id = +this.route.snapshot.paramMap.get('id');
    this.houseService.getHouseById(id).subscribe(
      next => (this.house = next),
      error => {
        console.log(error);
        this.house = null;
      }
    );
  }

}
