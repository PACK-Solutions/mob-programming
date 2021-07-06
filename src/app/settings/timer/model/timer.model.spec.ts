import { Timer } from './timer.model';
import {TestBed} from '@angular/core/testing';
import {AppComponent} from '../../../app.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ResetTimerComponent} from '../comp/reset-timer/reset-timer.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {TranslateModule} from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';

describe('Timer', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ],
      imports: [MatSnackBarModule, TranslateModule.forRoot(), MatMenuModule, MatSnackBarModule ]
    })
      .compileComponents();
  });

  it('should create an instance', () => {
    expect(new Timer()).toBeTruthy();
  });
});
