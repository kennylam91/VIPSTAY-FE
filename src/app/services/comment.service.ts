import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IStatusHouse} from '../model/IStatusHouse';
import {IComment} from '../model/IComment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private readonly API_URL_GET = environment.URL + '/api/comments';
  private readonly API_URL_POST = environment.URL + '/api/me/comments';

  constructor(private http: HttpClient) {
  }

  getCommentsByHouseId(houseId: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL_GET}/${houseId}`);
  }

  createComment(comment: Partial<IComment>): Observable<any> {
    return this.http.post<any>(this.API_URL_POST, comment);
  }
}
