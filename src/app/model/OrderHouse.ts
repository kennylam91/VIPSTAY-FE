import {IHouse} from './IHouse';
import {IUser} from './IUser';

export class OrderHouse {
  id: number;
  checkin: Date;
  checkout: Date;
  numberGuest: number;
  cost: number;
  orderTime: Date;
  house: IHouse;
  tenant: IUser;
}
