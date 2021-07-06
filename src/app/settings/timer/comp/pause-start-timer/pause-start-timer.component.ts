import {Component} from '@angular/core';
import {TimerService} from '../../service/timer.service';

@Component({
  selector: 'app-pause-start-timer',
  templateUrl: './pause-start-timer.component.html',
  styleUrls: ['./pause-start-timer.component.css'],
})
export class PauseStartTimerComponent {

  constructor(public timerService: TimerService) {}

}
