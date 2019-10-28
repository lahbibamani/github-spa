import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IAppConfig } from '../models/app-config.model';
declare var configuration: any;

@Injectable()
export class AppConfig {
  public static settings: IAppConfig;

  constructor() {}

  public load(): Promise<any> {
    const jsonFile: string = `assets/config/config.${environment.name}.json`;
    return from(
      fetch(jsonFile).then(function(response: any) {
        return response.json();
      })
    )
      .pipe(
        map(config => {
          AppConfig.settings = config;
          return;
        })
      )
      .toPromise();
  }
}
