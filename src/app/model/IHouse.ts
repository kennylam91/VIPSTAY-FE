import {HouseRequest} from './HouseRequest';
import {CategoryOfHouse} from './CategoryOfHouse';
import {ImageOfHouse} from './ImageOfHouse';

export interface IHouse {
  id: number;
  houseName: string;
  category: string;
  address: string;
  imageUrls: string[];
  bedroomNumber: number;
  bathroomNumber: number;
  price: number;
  description: string;
  rate: number;
  area: number;
}
