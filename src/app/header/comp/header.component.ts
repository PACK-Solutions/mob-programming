import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() deviceXs!: boolean;

  constructor(public router: Router, public translate: TranslateService) { }

  ngOnInit(): void {
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
  }
}
