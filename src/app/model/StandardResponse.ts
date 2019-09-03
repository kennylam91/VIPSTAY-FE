import {IHouse} from './IHouse';

export interface StandardResponse {
  success: boolean;
  message: string;
  data: IHouse;
}
