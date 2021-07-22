import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PauseStartTimerComponent } from './pause-start-timer.component';
import { AppComponent } from '../../../../app.component';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { EditTimerComponent } from '../edit-timer/edit-timer.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';
import { By } from '@angular/platform-browser';

describe('PauseStartTimerComponent', () => {
  let component: PauseStartTimerComponent;
  let fixture: ComponentFixture<PauseStartTimerComponent>;
  let de: DebugElement;

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
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
     expect(component).toBeTruthy();
  });

  it('should have button created', () => {
    expect(de.query(By.css('button')).nativeElement.innerText);
  });

  it('should have mat-icon created', () => {
    expect(de.query(By.css('mat-icon')).nativeElement.innerText);
  });

  it('should have div created', () => {
    expect(de.query(By.css('div')).nativeElement.innerText);
  });

});
