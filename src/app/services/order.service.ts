import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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
}
