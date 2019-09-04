import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from '../model/IUser';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = environment.URL + '/api';

  constructor(private httpClient: HttpClient) {
  }

  registerGuest(user: Partial<IUser>): Observable<any> {
    return this.httpClient.post<any>(this.API_URL + '/signup', user);
  }

  registerHost(user: Partial<IUser>): Observable<any> {
    return this.httpClient.post<any>(this.API_URL + '/host/signup', user);
  }
}

