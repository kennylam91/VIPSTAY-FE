import {IHouse} from './IHouse';

export interface IStatusHouse {
  id: number;
  house: IHouse;
  startHouse: Date;
  endHouse: Date;
}
