import {Component, Input, OnInit} from '@angular/core';
import {NavAuthGuard} from '../service/nav-auth.guard';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() deviceXs!: boolean;

  constructor(public navAuthGuard: NavAuthGuard, public router: Router, public translate: TranslateService) { }

  ngOnInit(): void {
  }

  signOutClick(): void {
    this.navAuthGuard.signOut();
    this.router.navigate(['']).then();
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
  }
}
