import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../services/app.config';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  protected ACCESS_TOKEN: string;

  constructor(private conf: AppConfig) {
    if (AppConfig.settings) {
      this.ACCESS_TOKEN = AppConfig.settings.apiServer.access_token;
    } else {
      this.conf.load().then((data: any) => {
        this.ACCESS_TOKEN = data.apiServer.access_token;
      });
    }
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `token ${this.ACCESS_TOKEN}`
      }
    });
    return next.handle(request);
  }
}
