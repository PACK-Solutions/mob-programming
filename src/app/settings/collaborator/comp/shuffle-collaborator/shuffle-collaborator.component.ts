import { Component } from '@angular/core';
import { CollaboratorsService } from '../../service/collaborators.service';

@Component({
  selector: 'app-shuffle-collaborator',
  templateUrl: './shuffle-collaborator.component.html',
  styleUrls: [ './shuffle-collaborator.component.css' ]
})
export class ShuffleCollaboratorComponent {

  constructor(private readonly collaboratorService: CollaboratorsService) { }

  shuffleUsers(): void {
    this.collaboratorService.shuffle();
  }

}
