import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGE_KEY } from 'src/assets/constants/local.storage.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(LANGUAGE_KEY);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(LANGUAGE_KEY);
  }
}
