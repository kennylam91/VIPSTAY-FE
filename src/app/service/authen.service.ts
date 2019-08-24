import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json'
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  token: string;

  constructor(private httpClient: HttpClient) {
  }

  authenticate(username: string, password: string) {
    return this.httpClient.post<any>('http://localhost:8080/login', {username, password});
  }

  getHouses() {
    return this.httpClient.get<any>('http://localhost:8080/api/houses');
  }


  isUserLoggedIn() {
    const user = localStorage.getItem('currentUser');
    return !(user === null);
  }

  logout() {
    localStorage.clear();
  }
}
