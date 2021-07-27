import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent  implements OnInit {

  constructor(private readonly translate: TranslateService) { }

  private readonly availableLangs = [ 'fr' ];

  ngOnInit(): void {
    const browserLang = this.translate.getBrowserLang();
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    if (this.availableLangs.includes(browserLang)) {
      this.translate.use(browserLang);
    }
  }

}
