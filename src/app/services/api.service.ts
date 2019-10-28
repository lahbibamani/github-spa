import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected SERVER_URL: string;

  constructor(private conf: AppConfig) {
    if (AppConfig.settings) {
      this.SERVER_URL = AppConfig.settings.apiServer.url;
    } else {
      this.conf.load().then((data: any) => {
        this.SERVER_URL = data.apiServer.url;
      });
    }
  }

  /**
   * Manage Http operation  failed.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  protected handleError<T>(operation: string = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
