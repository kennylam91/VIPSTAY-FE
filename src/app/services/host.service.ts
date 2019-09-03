import {Injectable} from '@angular/core';
import {IHouse} from '../model/IHouse';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {environment} from '../../environments/environment';
import {HouseRequest} from '../model/HouseRequest';
import {ImageOfHouse} from '../model/ImageOfHouse';
import {OrderHouse} from '../model/OrderHouse';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HostService {
  private API_URL = environment.URL + '/api/host/houses';

  constructor(private http: HttpClient) {
  }

  createHouse(imageOfHouses: ImageOfHouse[]): Observable<any> {
    return this.http.post<any>(this.API_URL, JSON.stringify(imageOfHouses), httpOptions);
  }

  updateHouse(house: IHouse): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/${house.id}`, house);
  }

  deleteHouse(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
}
