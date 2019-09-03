import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {IHouse} from '../model/IHouse';
import {HttpClient} from '@angular/common/http';
import {IStatusHouse} from '../model/IStatusHouse';

@Injectable({
  providedIn: 'root'
})
export class StatusHouseService {

  private readonly API_URL = environment.URL + '/api/host/statusHouses';
  private readonly API_URL_GET = environment.URL + '/api/statusHouses';

  constructor(private http: HttpClient) { }

  getStatusHouseByHouseId(houseId: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL_GET}/${houseId}`);
  }

  getStatusHouseById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${id}`);
  }

  createStatusHouse(statusHouse: Partial<IStatusHouse>): Observable<any> {
    return this.http.post<any>(this.API_URL, statusHouse);
  }

  updateStatusHouse(statusHouse: IStatusHouse): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/${statusHouse.id}`, statusHouse);
  }

  deleteStatusHouse(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
}
