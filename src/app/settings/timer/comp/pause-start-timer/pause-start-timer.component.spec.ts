import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PauseStartTimerComponent } from './pause-start-timer.component';
import {AppComponent} from '../../../../app.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {EditTimerComponent} from '../edit-timer/edit-timer.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {TranslateModule} from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';

describe('PauseStartTimerComponent', () => {
  let component: PauseStartTimerComponent;
  let fixture: ComponentFixture<PauseStartTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PauseStartTimerComponent ],
      imports: [MatSnackBarModule, TranslateModule.forRoot(), MatMenuModule, MatSnackBarModule ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PauseStartTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
     expect(component).toBeTruthy();
  });

});
