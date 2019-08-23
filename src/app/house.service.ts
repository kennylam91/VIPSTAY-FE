import {Injectable} from '@angular/core';
import {IHouse} from './model/IHouse';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class HouseService {
  houses: IHouse[];
  header: Headers;
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization', `Bearer ${this.authenService.token}`
  //   })
  // };
  private readonly API_URL = 'http://localhost:8080/api/houses';

  getHouses(): Observable<IHouse[]> {
    // this.header = new Headers({
    //   Authorization: `Bearer ${this.authenService.token}`,
    //   'Content-Type': 'application/json'
    // });
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.authenService.token}`,
      })
    };
    console.log(httpOptions);
    return this.http.get<IHouse[]>(this.API_URL, httpOptions);
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

  constructor(private http: HttpClient, private authenService: AuthenticationService) {

    // this.httpOptions.headers.set('Authorization', `Bearer ${this.authenService.token}`);
    console.log(this.header);
  }
}
