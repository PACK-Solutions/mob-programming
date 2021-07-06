import {Component, OnInit} from '@angular/core';
import {TimerService} from '../../service/timer.service';
import {FormControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-edit-timer',
  templateUrl: './edit-timer.component.html',
  styleUrls: ['./edit-timer.component.css'],
})
export class EditTimerComponent implements OnInit {

  public inputTime = new FormControl();

  constructor(public timerService: TimerService, private snackBar: MatSnackBar, public translate: TranslateService) {}

  ngOnInit(): void {
  }

  OnlyNumbersAllowed(event: { which: number; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;

    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  changeTimer(): void {
    this.timerService.maxCounter = this.inputTime.value * 60;
    this.timerService.counter = this.timerService.maxCounter;
    this.inputTime.reset();
    this.translate.get('snackTime').subscribe((res: string[]) => {
      this.snackBar.open(res[0] + (this.timerService.maxCounter / 60).toString() + res[1], undefined, {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    });
  }


}
