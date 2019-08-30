import {HouseRequest} from './HouseRequest';
import {CategoryOfHouse} from './CategoryOfHouse';

export interface IHouse {
  id: number;
  houseName: string;
  category: string;
  address: string;
  bedroomNumber: number;
  bathroomNumber: number;
  price: number;
  description: string;
  rate: number;
  area: number;
}
