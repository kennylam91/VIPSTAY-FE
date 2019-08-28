import {Injectable} from '@angular/core';
import {IHouse} from '../model/IHouse';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HouseService {
  houses: IHouse[];
  private API_URL = environment.URL + '/api/houses';

  constructor(private http: HttpClient, private authenService: AuthenticationService) {
  }

  getHouses(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }

  getHouseById(id: number): Observable<IHouse> {
    return this.http.get<IHouse>(`${this.API_URL}/${id}`);
  }

  createHouse(house: Partial<IHouse>): Observable<IHouse> {
    return this.http.post<IHouse>(this.API_URL, house);
  }

  updateHouse(house: IHouse): Observable<IHouse> {
    return this.http.put<IHouse>(`${this.API_URL}/${house.id}`, house);
  }

  deleteHouse(id: number): Observable<IHouse> {
    return this.http.delete<IHouse>(`${this.API_URL}/${id}`);
  }
}
