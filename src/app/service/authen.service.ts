import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private httpClient: HttpClient) {
  }

  authenticate(username, password) {
    return this.httpClient.post<any>('http://localhost:8080/login', {username, password}).pipe(
      map(userdata => {
        sessionStorage.setItem('username', username);
        const tokenStr = 'Bearer ' + userdata.token;
        sessionStorage.setItem('token', tokenStr);
        return userdata;
      })
    );
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('username');
  }
}
