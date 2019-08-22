import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from './model/IUser';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = 'http://localhost:8080/api/houses';

  constructor(private httpClient: HttpClient) {
  }

  create(user: Partial<IUser>): Observable<IUser> {
    return this.httpClient.post<IUser>(this.API_URL, user);
  }

  update(user: IUser): Observable<IUser> {
    return this.httpClient.put<IUser>(`${this.API_URL}/${user.id}`, user);
  }

}

