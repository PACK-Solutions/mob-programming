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
              private timerService: TimerService,
              private router: Router) {}

  onSelect(collaborator: Collaborator): void{
    this.selectedCollaborator = collaborator;
    console.log(collaborator.id);
  }

  public startTimer(): void {
    this.router.navigate(['/main']).then();
    this.timerService.startTimer();
  }

}
