import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router';
import {IHouse} from '../../../model/IHouse';
import {HouseService} from '../../../services/house.service';
import {StandardResponse} from '../../../model/StandardResponse';


@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent implements OnInit {
  houseForm: FormGroup;
  house: Partial<StandardResponse>;

  constructor(private router: Router,
              private service: HouseService) {
    this.houseForm = new FormGroup({
      houseName: new FormControl('', [Validators.required]),
      houseType: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      bedroomNumber: new FormControl(''),
      bathroomNumber: new FormControl(''),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  onChange($event) {
    this.house.data.image = $event;
  }

  createHouse() {
    console.log(this.house);
    this.service.createHouse(this.house).subscribe(() => {
      this.router.navigate(['/home-for-host']);
      this.house.data = {
        id: 0,
        houseName: '',
        houseType: '',
        address: '',
        bedroomNumber: 0,
        bathroomNumber: 0,
        price: 0,
        description: '',
        image: 'https://previews.123rf.com/images/anthonycz/anthonycz1208/anthonycz120800119/15033060-house-icon.jpg',
        rate: 0,
        area: 0,
        status: '',
        user: '',
        category: ''
      };
    }, error => {
      console.log(error);
      this.router.navigate(['/houses']);
    });
  }
}
