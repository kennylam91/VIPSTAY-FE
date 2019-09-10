import {IUser} from './IUser';
import {IHouse} from './IHouse';

export interface IRate {
  id: number;
  user: IUser;
  ratePoint: number;
  house: IHouse;
}
