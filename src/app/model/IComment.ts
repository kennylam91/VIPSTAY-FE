import {IUser} from './IUser';
import {IHouse} from './IHouse';

export interface IComment {
  id: number;
  user: IUser;
  comment: string;
  house: IHouse;
}
