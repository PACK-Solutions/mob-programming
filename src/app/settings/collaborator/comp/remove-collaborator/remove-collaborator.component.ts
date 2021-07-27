import { Component, Input } from '@angular/core';
import { Collaborator } from '../../model/collaborator.model';
import { CollaboratorsService } from '../../service/collaborators.service';

@Component({
  selector: 'app-remove-collaborator',
  templateUrl: './remove-collaborator.component.html',
  styleUrls: [ './remove-collaborator.component.css' ]
})
export class RemoveCollaboratorComponent {
  @Input() collaborator!: Collaborator;

  constructor(private readonly collaboratorService: CollaboratorsService) { }

  public removeCollaborators(): void {
    if (this.collaborator === this.collaboratorService.currentCollaborator) {
      this.collaboratorService.nextCollaborator();
    }
    this.collaboratorService.removeCollaborator(this.collaborator.id);
  }

}
