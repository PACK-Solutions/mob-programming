import {Injectable} from '@angular/core';
import {Observable, Subscription, timer} from 'rxjs';
import {take} from 'rxjs/operators';
import {CollaboratorsService} from '../../collaborator/service/collaborators.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  public counter = 5;
  public maxCounter = 5;
  public countDown!: Subscription;
  public tick = 1000;
  public timerState = 'pause';


  constructor(private collaboratorService: CollaboratorsService) {
  }

  public createTimer(): Observable<number>{
    return timer(0, this.tick).pipe(
      take(this.counter)
    );
  }

  public createTimerFromValue(actualValue: number): Observable<number>{
    console.log(actualValue);
    return timer(0, this.tick).pipe(
      take(actualValue)
    );
  }

  public startTimer(): void {
    this.timerState = 'start';
    this.counter += 1;
    const actualTimer = !this.countDown ?
      this.createTimer() :
      this.createTimerFromValue(this.counter);
    this.countDown = actualTimer.subscribe(() => {
      this.counter -= 1;
      } , () => {
        console.log('error');
      }, () => {
        console.log('complete');
        this.endTimer();
        this.startTimer();
      });
  }

  public endTimer(): void {
    this.playAudio();
    this.counter = this.maxCounter;
    this.collaboratorService.nextCollaborator();
  }

  public pauseTimer(): void {
    if (this.countDown) {
      this.timerState = 'pause';
      this.countDown.unsubscribe();
    }
  }

  public resetTimer(): void {
    this.pauseTimer();
    this.counter = this.maxCounter;
    this.collaboratorService.nextCollaborator();
  }

  playAudio(): void {
    const audio = new Audio('assets/audio/notification_up.mp3');
    audio.load();
    audio.play().then();
  }

}
