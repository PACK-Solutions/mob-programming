import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { TimerService } from '../../service/timer.service';
import { PauseStartTimerComponent } from './pause-start-timer.component';

describe('PauseStartTimerComponent', () => {
  let component: PauseStartTimerComponent;
  let fixture: ComponentFixture<PauseStartTimerComponent>;
  let de: DebugElement;
  let timerService: TimerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PauseStartTimerComponent
      ],
      imports: [
        MatIconModule,
        MatSnackBarModule,
        TranslateModule.forRoot()
      ]
    }).compileComponents();
    timerService = TestBed.inject(TimerService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PauseStartTimerComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
     expect(component).toBeDefined();
  });

  it('should have pause button', () => {
    timerService.timerState = 'start';
    fixture.detectChanges();
    expect(de.query(By.css('button mat-icon')).nativeElement.innerText).toBe('pause_circle_outline');
  });

  it('should have play button', () => {
    timerService.timerState = 'pause';
    fixture.detectChanges();
    expect(de.query(By.css('button mat-icon')).nativeElement.innerText).toBe('play_circle_outline');
  });

});
