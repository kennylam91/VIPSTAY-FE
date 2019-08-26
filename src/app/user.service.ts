import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from './model/IUser';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = 'http://localhost:8080/api/signup';

  constructor(private httpClient: HttpClient) {
  }

  register(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(this.API_URL, user);
  }
}

