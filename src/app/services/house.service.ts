import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {environment} from '../../environments/environment';
import {IHouse} from '../model/IHouse';
import {StandardResponse} from '../model/StandardResponse';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  houses: StandardResponse;
  private API_URL = environment.URL + '/api/houses';

  constructor(private http: HttpClient, private authenService: AuthenticationService) {
  }

  getHouses(): Observable<StandardResponse> {
    return this.http.get<StandardResponse>(this.API_URL);
  }

  getHouseById(id: number): Observable<StandardResponse> {
    return this.http.get<StandardResponse>(`${this.API_URL}/${id}`);
  }

  createHouse(house: Partial<StandardResponse>): Observable<StandardResponse> {
    return this.http.post<StandardResponse>(`${this.API_URL + '/create'}`, house);
  }

  // updateHouse(house: StandardResponse): Observable<StandardResponse> {
  //   return this.http.put<StandardResponse>(`${this.API_URL}/${house.data.id}`, house);
  // }

  deleteHouse(id: number): Observable<StandardResponse> {
    return this.http.delete<StandardResponse>(`${this.API_URL}/${id}`);
  }
}
