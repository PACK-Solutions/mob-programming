import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { ResetTimerComponent } from './reset-timer.component';

describe('ResetTimerComponent', () => {
  let component: ResetTimerComponent;
  let fixture: ComponentFixture<ResetTimerComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ResetTimerComponent
      ],
      imports: [
        MatSnackBarModule,
        TranslateModule.forRoot()
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetTimerComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have button created', () => {
    expect(de.query(By.css('button')).nativeElement.innerText).toBe('next');
  });

});
