import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StandardResponse} from '../../../model/StandardResponse';
import {HouseRequest} from '../../../model/HouseRequest';
import {ImageOfHouse} from '../../../model/ImageOfHouse';
import {CategoryOfHouse} from '../../../model/CategoryOfHouse';
import {HostService} from '../../../services/host.service';
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
              private hostService: HostService) {
    this.houseForm = new FormGroup({
      houseName: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      bedroomNumber: new FormControl('', Validators.min(0)),
      bathroomNumber: new FormControl('', Validators.min(0)),
      price: new FormControl('', [Validators.min(0)]),
      description: new FormControl(''),
      area: new FormControl('', [Validators.min(0)])
    });
    const typeName = 'Home';
    this.house = {
      houseName: '',
      houseType: '',
      address: '',
      bedroomNumber: 0,
      bathroomNumber: 0,
      price: 0,
      description: '',
      rate: 0,
      area: 0
    };
  }

  ngOnInit() {
  }

  createHouse() {
    if (this.houseForm.valid) {
      console.log(this.house);
      const imageHouses: ImageOfHouse[] = [];
      for (let i = 0; i < this.hostService.imageUrls.length; i++) {
        let imageHouse = new ImageOfHouse();
        imageHouse.imageUrl = this.hostService.imageUrls[i];
        imageHouse.house = this.house;
        imageHouses.push(imageHouse);
      }
      this.hostService.createHouse(imageHouses).subscribe(next => {
        console.log(next);
        this.router.navigate(['/home-for-host/houses']);
      }, error => console.log(error));
    } else {
      alert('Thông tin nhà chưa đủ hoặc không hợp lệ. Vui lòng kiểm tra lại.');
    }
  }

  redirect() {
    this.router.navigate(['/home-for-host']);
  }
}
