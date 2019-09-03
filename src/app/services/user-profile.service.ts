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
  updateUser(user: Partial<IUser>): Observable<IUser> {
    return this.httpClient.put<IUser>(`${this.API_URL + '/update'}/${user.id}`, user);
  }

  getUserByid(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.API_URL}/${id}`);
  }
}
