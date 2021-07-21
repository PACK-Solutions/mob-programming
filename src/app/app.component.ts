import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { SwPush } from '@angular/service-worker';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'MobProgramming';
  mediaSub!: Subscription;
  deviceXs!: boolean;

  constructor(public mediaObserver: MediaObserver, private swPush: SwPush, public translate: TranslateService, public router: Router) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
          this.deviceXs = result.mqAlias === 'xs';
        }
      );
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

}
