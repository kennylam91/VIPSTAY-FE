import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from './model/IUser';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = 'http://localhost:8080/api/user';

  constructor(private httpClient: HttpClient) {
  }

  register(user: Partial<IUser>): Observable<IUser> {
    return this.httpClient.post<IUser>(this.API_URL, user);
  }

  update(user: IUser): Observable<IUser> {
    return this.httpClient.put<IUser>(`${this.API_URL}/${user.id}`, user);
  }

  getById(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.API_URL}/${id}`);
  }
  delete(id: number): Observable<IUser> {
    return this.httpClient.delete<IUser>(`${this.API_URL}/${id}`);
  }
}

