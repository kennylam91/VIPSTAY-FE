import {Component, OnInit} from '@angular/core';
import {IHouse} from '../../../model/IHouse';
import {HouseService} from '../../../services/house.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StatusHouseService} from '../../../services/status-house.service';
import {IStatusHouse} from '../../../model/IStatusHouse';
import {HostService} from '../../../services/host.service';

@Component({
  selector: 'app-edit-house',
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.css']
})
export class EditHouseComponent implements OnInit {

  houseForm: FormGroup;
  house: IHouse;
  statusHouses: IStatusHouse[];

  constructor(private hostService: HostService,
              private houseService:HouseService,
              private statusHouseService: StatusHouseService,
              private route: ActivatedRoute,
              private router: Router) {
    this.houseForm = new FormGroup({
      houseName: new FormControl('', [Validators.required]),
      houseType: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      bedroomNumber: new FormControl(''),
      bathroomNumber: new FormControl(''),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
    });
    this.house = {
      id: 0,
      houseName: '',
      category: '',
      address: '',
      bedroomNumber: 0,
      bathroomNumber: 0,
      price: 0,
      description: '',
      imageUrls: [],
      rate: 0,
      area: 0,
    };
    this.statusHouses = [];
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      this.houseService.getHouseById(id).subscribe(next => {
        this.house = next.data;
        console.log(next.data);
        this.statusHouseService.getStatusHouseByHouseId(this.house.id).subscribe(data => {
          if (data.data != null) {
            this.statusHouses = data.data;
            console.log(this.statusHouses);
            console.log(this.statusHouses[0]);
          }
        }, error1 => {
          console.log(error1);
        });
      }, error1 => {
        console.log(error1);
        this.house = null;
      });
    });
  }

  editHouse() {
    console.log(this.house);
    this.hostService.updateHouse(this.house).subscribe(next => {
      console.log(next);
    }, error => console.log(error));
  }

  delete(value) {
    this.statusHouseService.deleteStatusHouse(value).subscribe(next => {
      alert(next.message);
    }, error => console.log(error));
  }

  redirect() {
    this.router.navigate(['/home-for-host/houses']);
  }
}
