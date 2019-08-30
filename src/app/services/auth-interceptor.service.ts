import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('currentUser') && localStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
    }
    return next.handle(req);
  }

}
