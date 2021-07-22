import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetTimerComponent } from './reset-timer.component';
import { AppComponent } from '../../../../app.component';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { PauseStartTimerComponent } from '../pause-start-timer/pause-start-timer.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';
import { By } from '@angular/platform-browser';

describe('ResetTimerComponent', () => {
  let component: ResetTimerComponent;
  let fixture: ComponentFixture<ResetTimerComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetTimerComponent ],
      imports: [MatSnackBarModule, TranslateModule.forRoot(), MatMenuModule, MatSnackBarModule ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetTimerComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have div created', () => {
    expect(de.query(By.css('div')).nativeElement.innerText);
  });

  it('should have button created', () => {
    expect(de.query(By.css('button')).nativeElement.innerText);
  });

});
