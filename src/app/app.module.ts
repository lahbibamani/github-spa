import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxLoggerLevel, LoggerModule } from 'ngx-logger';
import { GithubService } from './services/github.service';
import { AppConfig } from './services/app.config';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { FilterPipe } from './pipes/filter.pipe';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TypeHelper } from './helper/type.helper';

export function initializeApp(appConfig: AppConfig): () => Promise<any> {
  return () => appConfig.load();
}
// required for AOT compilation
export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    RepositoryListComponent,
    RepositoryDetailsComponent,
    UserDetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, // TODO: Next step is to completely remove FormsModule but for now, both exists
    HttpClientModule,
    NgSelectModule,
    NgbPaginationModule,
    NgbModalModule,
    NgxSpinnerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG,
      disableConsoleLogging: environment.production
    })
  ],
  providers: [
    AppConfig,
    GithubService,
    TypeHelper,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
