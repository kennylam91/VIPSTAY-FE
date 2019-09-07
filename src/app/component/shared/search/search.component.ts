import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHouse} from '../../../model/IHouse';
import {HouseService} from '../../../services/house.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FilterRequest} from '../../../model/FilterRequest';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  houses: IHouse[];
  filteredHouses: IHouse[];
  searchForm: FormGroup;
  @Output()
  press = new EventEmitter<IHouse[]>();
  addresses: string[] = [];

  constructor(private houseService: HouseService) {
    this.searchForm = new FormGroup({
      address: new FormControl(''),
      bedroomNumber: new FormControl(''),
      bathroomNumber: new FormControl(''),
      minPrice: new FormControl(''),
      maxPrice: new FormControl(''),
      checkin: new FormControl(''),
      checkout: new FormControl('')
    });
  }

  ngOnInit() {
    this.houseService.getHouses()
      .subscribe(next => {
        this.houses = next.data;
        for (const house of this.houses) {
          this.addresses.push(house.address);
        }
        this.addresses = this.addresses.filter((value, i, self) => self.indexOf(value) === i);
        console.log(this.addresses);
      });
  }

  filter() {
    if (this.searchForm.valid) {
      const form = this.searchForm.value;
      const isEmptyForm = !form.address && !form.bedroomNumber && !form.bathroomNumber && !form.minPrice && !form.maxPrice;
      if (!isEmptyForm) {
        if (form.address) {
          this.filteredHouses = this.houses.filter((house => house.address === form.address));
          console.log(this.houses);
        }
        if (form.bedroomNumber) {
          this.filteredHouses = this.houses.filter((house => house.bedroomNumber === +form.bedroomNumber));
          console.log(this.houses);
        }
        if (form.bathroomNumber) {
          this.filteredHouses = this.houses.filter((house => house.bathroomNumber === +form.bathroomNumber));
          console.log(this.houses);
        }
        if (form.minPrice) {
          this.filteredHouses = this.houses.filter((house => house.price >= +form.minPrice));
          console.log(this.houses);
        }
        if (form.maxPrice) {
          this.filteredHouses = this.houses.filter((house => house.price <= +form.maxPrice));
          console.log(this.houses);
        }
      } else {
        this.filteredHouses = this.houses;
      }
      this.press.emit(this.filteredHouses);
    }
  }

  unFilter() {
    const filterEmpty = new FilterRequest();
    filterEmpty.address = '';
    filterEmpty.bathroomNumber = '';
    filterEmpty.bedroomNumber = '';
    filterEmpty.minPrice = '';
    filterEmpty.maxPrice = '';
    this.searchForm.patchValue(filterEmpty);
    this.filter();
  }
}
