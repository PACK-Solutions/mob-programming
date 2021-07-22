import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddTimerComponent } from './add-timer.component';
import { AppComponent } from '../../../../app.component';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';
import { TimerPipe } from '../../pipe/timer.pipe';
import { By } from '@angular/platform-browser';


describe('AddTimerComponent', () => {
  let component: AddTimerComponent;
  let fixture: ComponentFixture<AddTimerComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTimerComponent, TimerPipe ],
      imports: [MatSnackBarModule, TranslateModule.forRoot(), MatMenuModule, MatSnackBarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTimerComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
     expect(component).toBeTruthy();
  });


  it('should have app-pause-start-timer created', () => {
    expect(de.query(By.css('app-pause-start-timer')).nativeElement.innerText);
  });
  it('should have app-reset-timer created', () => {
    expect(de.query(By.css('app-reset-timer')).nativeElement.innerText);
  });

  it('should have timerButton created', () => {
    expect(de.query(By.css('.timerButton')).nativeElement.innerText);
  });

  it('should have mat-card created', () => {
    expect(de.query(By.css('mat-card')).nativeElement.innerText);
  });

  it('should have divs created', () => {
    expect(de.query(By.css('div')).nativeElement.innerText);
  });

});
