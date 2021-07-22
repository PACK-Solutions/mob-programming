import {Component} from '@angular/core';
import {Collaborator} from '../../model/collaborator.model';
import {CollaboratorsService} from '../../service/collaborators.service';
import {TimerService} from '../../../timer/service/timer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-array-collaborator',
  templateUrl: './array-collaborator.component.html',
  styleUrls: ['./array-collaborator.component.css']
})
export class ArrayCollaboratorComponent {

  selectedCollaborator?: Collaborator;

  constructor(public collaboratorService: CollaboratorsService,
              public timerService: TimerService,
              private router: Router) {}

  onSelect(collaborator: Collaborator): void{
    this.selectedCollaborator = collaborator;
  }

  public startTimer(): void {
    this.router.navigate(['/run']).then();
    this.timerService.startTimer();
  }

}
