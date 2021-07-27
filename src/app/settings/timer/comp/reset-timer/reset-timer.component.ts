import { Component } from '@angular/core';
import { TimerService } from '../../service/timer.service';

@Component({
  selector: 'app-reset-timer',
  templateUrl: './reset-timer.component.html',
  styleUrls: [ './reset-timer.component.css' ]
})
export class ResetTimerComponent {

  constructor(public readonly timerService: TimerService) { }

}
