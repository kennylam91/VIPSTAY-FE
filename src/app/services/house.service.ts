import {Injectable} from '@angular/core';
import {IHouse} from '../model/IHouse';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {environment} from '../../environments/environment';
import {HouseRequest} from '../model/HouseRequest';
import {ImageOfHouse} from '../model/ImageOfHouse';

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
  imageUrls: string[] = [];
  private API_URL = environment.URL + '/api/host/houses';

  constructor(private http: HttpClient, private authenService: AuthenticationService) {
  }

  getHouses(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }

  getHouseById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${id}`);
  }

  createHouse(imageOfHouses: ImageOfHouse[]): Observable<any> {
    return this.http.post<any>(this.API_URL, JSON.stringify(imageOfHouses), httpOptions);
  }

  updateHouse(house: IHouse): Observable<IHouse> {
    return this.http.put<IHouse>(`${this.API_URL}/${house.id}`, house);
  }

  deleteHouse(id: number): Observable<IHouse> {
    return this.http.delete<IHouse>(`${this.API_URL}/${id}`);
  }
}
