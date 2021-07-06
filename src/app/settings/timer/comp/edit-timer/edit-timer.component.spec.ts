import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimerComponent } from './edit-timer.component';
import {AppComponent} from '../../../../app.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {TranslateModule} from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';
import {TimerPipe} from '../../pipe/timer.pipe';

describe('EditTimerComponent', () => {
  let component: EditTimerComponent;
  let fixture: ComponentFixture<EditTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTimerComponent, TimerPipe ],
      imports: [MatSnackBarModule, TranslateModule.forRoot(), MatMenuModule, MatSnackBarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
  expect(component).toBeTruthy();
  });

});
