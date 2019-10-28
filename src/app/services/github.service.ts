import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../models/user.model';
import { ApiService } from './api.service';
import { AppConfig } from './app.config';
import { Repository } from '../models/repository.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService extends ApiService {

  constructor(private httpClient: HttpClient, conf: AppConfig) {
    super(conf);
  }

  getUserInfos(username: string): Observable<User> {
    const url = `${this.SERVER_URL}/users/${username}`;
    console.log(url);
    return this.httpClient.get<User>(url).pipe(
      retry(1),
      catchError(this.handleError('getUserInfos', []))
    );
  }

  getRepositoriesByUser(username: string, perPage: number, page: number): Observable<Repository[]> {
    const url = `${this.SERVER_URL}/search/repositories?q=user:${username}&per_page=${perPage}&page=${page}`;
    console.log(url);
    return this.httpClient.get<User>(url).pipe(
      retry(1),
      catchError(this.handleError('getRepositoriesByUser', []))
    );
  }

}
