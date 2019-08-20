import {Injectable} from '@angular/core';
import {IHouse} from './model/IHouse';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  houses: IHouse[];
  private readonly API_URL = 'http://localhost:8080/houses';

  getHouses(): Observable<IHouse[]> {
    return this.http.get<IHouse[]>(this.API_URL);
  }
  getBookById(id: number): Observable<IHouse> {
    return this.http.get<IHouse>(`${this.API_URL}/${id}`);
  }

  createBook(book: Partial<IHouse>): Observable<IHouse> {
    return this.http.post<IHouse>(this.API_URL, book);
  }

  updateBook(book: IHouse): Observable<IHouse> {
    return this.http.put<IHouse>(`${this.API_URL}/${book.id}`, book);
  }

  deleteBook(id: number): Observable<IHouse> {
    return this.http.delete<IHouse>(`${this.API_URL}/${id}`);
  }

  constructor(private http: HttpClient) {
  }
}