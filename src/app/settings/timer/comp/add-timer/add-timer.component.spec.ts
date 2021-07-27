import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { TimerPipe } from '../../pipe/timer.pipe';
import { PauseStartTimerComponent } from '../pause-start-timer/pause-start-timer.component';
import { ResetTimerComponent } from '../reset-timer/reset-timer.component';
import { AddTimerComponent } from './add-timer.component';

describe('AddTimerComponent', () => {
  let component: AddTimerComponent;
  let fixture: ComponentFixture<AddTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AddTimerComponent,
        PauseStartTimerComponent,
        ResetTimerComponent,
        TimerPipe
      ],
      imports: [
        MatCardModule,
        MatSnackBarModule,
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();
    TestBed.overrideTemplateUsingTestingModule(PauseStartTimerComponent, '');
    TestBed.overrideTemplateUsingTestingModule(ResetTimerComponent, '');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

});
