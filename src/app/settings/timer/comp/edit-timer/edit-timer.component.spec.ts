import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimerComponent } from './edit-timer.component';
import { AppComponent } from '../../../../app.component';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';
import { TimerPipe } from '../../pipe/timer.pipe';
import { By } from '@angular/platform-browser';

describe('EditTimerComponent', () => {
  let component: EditTimerComponent;
  let fixture: ComponentFixture<EditTimerComponent>;
  let de: DebugElement;

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
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
  expect(component).toBeTruthy();
  });


  it('should have div created', () => {
    expect(de.query(By.css('div')).nativeElement.innerText);
  });

  it('should have mat-card created', () => {
    expect(de.query(By.css('mat-card')).nativeElement.innerText);
  });

  it('should have form created', () => {
    expect(de.query(By.css('form')).nativeElement.innerText);
  });

  it('should have mat-form-field created', () => {
    expect(de.query(By.css('mat-form-field')).nativeElement.innerText);
  });

  it('should have mat-label created', () => {
    expect(de.query(By.css('mat-label')).nativeElement.innerText);
  });

  it('should have input created', () => {
    expect(de.query(By.css('input')).nativeElement.innerText);
  });

  it('should have button created', () => {
    expect(de.query(By.css('button')).nativeElement.innerText);
  });


});
