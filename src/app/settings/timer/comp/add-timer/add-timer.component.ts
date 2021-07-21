import { Component } from '@angular/core';
import { TimerService } from '../../service/timer.service';

@Component({
  selector: 'app-add-timer',
  templateUrl: './add-timer.component.html',
  styleUrls: ['./add-timer.component.css'],
})
export class AddTimerComponent {

  constructor(public timerService: TimerService) {
  }

}
