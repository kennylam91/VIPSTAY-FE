import {Component, OnInit} from '@angular/core';
import {StatusHouseService} from '../../../services/status-house.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IStatusHouse} from '../../../model/IStatusHouse';
import {HouseService} from '../../../services/house.service';

@Component({
  selector: 'app-edit-status-house',
  templateUrl: './edit-status-house.component.html',
  styleUrls: ['./edit-status-house.component.css']
})
export class EditStatusHouseComponent implements OnInit {

  private statusHouses: IStatusHouse[];
  private statusHouse: Partial<IStatusHouse>;
  private houseId: number;

  constructor(private statusHouseService: StatusHouseService,
              private houseService: HouseService,
              private route: ActivatedRoute,
              private router: Router) {
    this.statusHouse = {
      house: null,
      startDate: null,
      endDate: null
    };
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.houseId = +paramMap.get('houseId');
      this.statusHouseService.getStatusHouseByHouseId(this.houseId).subscribe(next => {
        this.statusHouses = next.data;
        console.log(this.statusHouses);
      }, error => console.log(error));
    });
  }

  delete(id: number) {
    this.statusHouseService.deleteStatusHouse(id).subscribe(next => {
      alert(next.message);
      this.statusHouseService.getStatusHouseByHouseId(this.houseId).subscribe(data => {
        this.statusHouses = data.data;
        console.log(this.statusHouses);
      }, error => console.log(error));
    }, error => console.log(error));
  }

  create() {
    this.houseService.getHouseById(this.houseId).subscribe(next => {
      this.statusHouse.house = next.data;
      if (this.statusHouse.startDate !== null && this.statusHouse.endDate !== null) {
        this.statusHouse.startDate = new Date(this.statusHouse.startDate);
        this.statusHouse.endDate = new Date(this.statusHouse.endDate);
        this.statusHouseService.createStatusHouse(this.statusHouse).subscribe(data => {
          alert(data.message);
          this.statusHouseService.getStatusHouseByHouseId(this.houseId).subscribe(data1 => {
            this.statusHouses = data1.data;
            console.log(this.statusHouses);
          }, error => console.log(error));
          this.statusHouse.startDate = null;
          this.statusHouse.endDate = null;
          this.statusHouseService.getStatusHouseByHouseId(this.houseId).subscribe(next1 => {
            this.statusHouses = next1.data;
            console.log(this.statusHouses);
          }, error => console.log(error));
        });
      }
    });
  }
}
