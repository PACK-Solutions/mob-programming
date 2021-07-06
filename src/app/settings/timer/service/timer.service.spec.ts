import { TestBed } from '@angular/core/testing';

import { TimerService } from './timer.service';
import {AppComponent} from '../../../app.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {TranslateModule} from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';

describe('TimerService', () => {
  let service: TimerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ],
      imports: [MatSnackBarModule, TranslateModule.forRoot(), MatMenuModule, MatSnackBarModule ]
    })
      .compileComponents();
    service = TestBed.inject(TimerService);
  });

  it('should be created', () => {
     expect(service).toBeTruthy();
  });

});
