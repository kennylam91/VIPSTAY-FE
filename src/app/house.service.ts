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
  private readonly API_URL = 'http://localhost:8080/houses';

  getHouses(): Observable<IHouse[]> {
    return this.http.get<IHouse[]>(this.API_URL, {
      headers: this.authenService.header
    }
    );
  }

  getHouseById(id: number): Observable<IHouse> {
    return this.http.get<IHouse>(`${this.API_URL}/${id}`,
      {
        headers: this.authenService.header
      });
  }

  createHouse(house: Partial<IHouse>): Observable<IHouse> {
    return this.http.post<IHouse>(this.API_URL, house,
      {
        headers: this.authenService.header
      });
  }

  updateHouse(house: IHouse): Observable<IHouse> {
    return this.http.put<IHouse>(`${this.API_URL}/${house.id}`, house,
      {
        headers: this.authenService.header
      });
  }

  deleteHouse(id: number): Observable<IHouse> {
    return this.http.delete<IHouse>(`${this.API_URL}/${id}`,
      {
        headers: this.authenService.header
      });
  }

  constructor(private http: HttpClient, private authenService: AuthenticationService) {
  }
}
