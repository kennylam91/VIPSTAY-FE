import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderHouse} from '../model/OrderHouse';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  API_URL = environment.URL + '/api/me/orders';

  constructor(private http: HttpClient) {
  }

  getOrders(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }

  deleteOrder(id: number): Observable<any> {
    return this.http.delete<any>(this.API_URL + `/${id}` );
  }

  getHouseOrderByUser(id: number): Observable<any> {
    return this.http.get<any>(`${environment.URL + '/api/host/house/orderOfUser'}/${id}`);
  }

  getlistHouseOfHost(): Observable<any> {
    return this.http.get<any>(`${environment.URL + '/api/host/houses'}`);
  }
}
