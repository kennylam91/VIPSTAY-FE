import {HouseRequest} from './HouseRequest';
import {CategoryOfHouse} from './CategoryOfHouse';
import {ImageOfHouse} from './ImageOfHouse';
import {OrderHouse} from './OrderHouse';

export class IHouse {
  id: number;
  houseName: string;
  category: string;
  address: string;
  imageUrls: string[];
  orderHouses: number[];
  bedroomNumber: number;
  bathroomNumber: number;
  price: number;
  description: string;
  rate: number;
  area: number;
}
