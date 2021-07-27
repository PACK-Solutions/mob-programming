import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent {

  @Input() deviceXs!: boolean;

  constructor(public readonly router: Router, private readonly translate: TranslateService) { }

  switchLang(lang: string): void {
    this.translate.use(lang);
  }

}
