import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { TimerService } from '../../service/timer.service';

@Component({
  selector: 'app-edit-timer',
  templateUrl: './edit-timer.component.html',
  styleUrls: ['./edit-timer.component.css'],
})
export class EditTimerComponent {

  public inputTime = new FormControl();

  constructor(public readonly timerService: TimerService,
              private readonly snackBar: MatSnackBar,
              public readonly translate: TranslateService) { }

  onlyNumbersAllowed(event: { which: number; keyCode: any; }): boolean {
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
