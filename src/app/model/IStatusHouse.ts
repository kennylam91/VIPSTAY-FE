import {IHouse} from './IHouse';

export interface IStatusHouse {
  id: number;
  house: IHouse;
  startDate: Date;
  endDate: Date;
}
