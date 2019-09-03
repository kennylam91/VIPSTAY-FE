import {IHouse} from './IHouse';
import {ImageOfHouse} from './ImageOfHouse';

export class HouseRequest {
  house: Partial<IHouse>;
  images: ImageOfHouse;

  constructor(house, image) {
    this.house = house;
    this.images = image;
  }
}
