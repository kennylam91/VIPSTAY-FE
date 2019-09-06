import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IRate} from '../model/IRate';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  private readonly API_URL_GET = environment.URL + '/api/rates';
  private readonly API_URL_POST = environment.URL + '/api/me/rates';

  constructor(private http: HttpClient) {
  }

  getRatesByHouseId(houseId: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL_GET}/${houseId}`);
  }

  createRate(rate: Partial<IRate>): Observable<any> {
    return this.http.post<any>(this.API_URL_POST, rate);
  }
}
