import {IUser} from './IUser';
import {IHouse} from './IHouse';

export interface IRate {
  id: number;
  user: IUser;
  rate: number;
  house: IHouse;
}
