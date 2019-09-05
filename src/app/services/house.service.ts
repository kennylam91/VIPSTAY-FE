import {Injectable} from '@angular/core';
import {IHouse} from '../model/IHouse';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {environment} from '../../environments/environment';
import {OrderHouse} from '../model/OrderHouse';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  houses: IHouse[];
  order: any;
  imageUrls: string[] = [];
  private API_URL = environment.URL + '/api/houses';

  constructor(private http: HttpClient, private authenService: AuthenticationService) {
  }

  getHouses(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }

  getHouseById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${id}`);
  }

  bookingHouse(orderHouse: OrderHouse, id: number): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/${id}/booking`, JSON.stringify(orderHouse), httpOptions);
  }


}
