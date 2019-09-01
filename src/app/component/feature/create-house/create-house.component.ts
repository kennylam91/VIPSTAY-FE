import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {IHouse} from '../../../model/IHouse';
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
              private houseService: HouseService) {
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
      houseName: '',
      houseType: '',
      address: '',
      bedroomNumber: 0,
      bathroomNumber: 0,
      price: 0,
      description: '',
      images: ['https://previews.123rf.com/images/anthonycz/anthonycz1208/anthonycz120800119/15033060-house-icon.jpg'],
      rate: 0,
      area: 0,
    };
  }

  ngOnInit() {
  }

  // onChange($event) {
  //   this.house.images = $event;
  // }

  createHouse() {
    this.house.images = this.houseService.imageUrls;
    console.log(this.house);
    this.houseService.createHouse(this.house).subscribe(next => {
      console.log(next);
    }, error => console.log(error));
  }

  redirect() {
    this.router.navigate(['/home-for-host']);
  }
}
