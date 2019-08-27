import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {IHouse} from '../../../model/IHouse';
import {Router} from '@angular/router';
import {HouseService} from '../../../services/house.service';

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent implements OnInit {

  houseForm: FormGroup;
  house: Partial<IHouse>;

  constructor(private router: Router,
              private service: HouseService) {
    this.houseForm = new FormGroup({
      houseName: new FormControl(''),
      houseType: new FormControl(''),
      address: new FormControl(''),
      bedroomNumber: new FormControl(''),
      bathroomNumber: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      image: new FormControl(''),
      rate: new FormControl(''),
      area: new FormControl('')
    });
    this.house = {
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
  }

  ngOnInit() {
  }

  onChange($event) {
    this.house.image = $event;
  }

  createHouse() {
    console.log(this.house);
    this.service.createHouse(this.house).subscribe(() => {
      this.router.navigate(['/home-for-host']);
    }, error => console.log(error) );
  }
}
