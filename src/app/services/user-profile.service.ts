import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {IUser} from '../model/IUser';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private API_URL = environment.URL + '/api/user';

  constructor(private httpClient: HttpClient) {
  }

  getAllUser(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.API_URL);
  }

  updateUser(user: Partial<IUser>): Observable<any> {
    return this.httpClient.put<any>(`${this.API_URL + '/updateCurrent'}`, user);
  }

  getUserByid(): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL + '/Current'}`);
  }

  confirmPaswordUser(password: string): Observable<any> {
    return this.httpClient.post<any>(`${this.API_URL + '/confirmPassword'}`, password);
  }
}
