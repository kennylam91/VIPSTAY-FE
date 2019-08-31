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
  imageUrls: string[] = [];
  private API_URL = environment.URL + '/api/host/houses';
  private API_URL_GET = environment.URL + '/api/houses';

  constructor(private http: HttpClient, private authenService: AuthenticationService) {
  }

  getHouses(): Observable<any> {
    return this.http.get<any>(this.API_URL_GET);
  }

  getHouseById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL_GET}/${id}`);
  }

  createHouse(house: Partial<any>): Observable<IHouse> {
    return this.http.post<any>(this.API_URL, house);
  }

  updateHouse(house: IHouse): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/${house.id}`, house);
  }

  deleteHouse(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
}
