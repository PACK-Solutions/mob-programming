import { Component } from '@angular/core';
import { CollaboratorsService } from '../../service/collaborators.service';

@Component({
  selector: 'app-rotation-collaborator',
  templateUrl: './rotation-collaborator.component.html',
  styleUrls: [ './rotation-collaborator.component.css' ]
})
export class RotationCollaboratorComponent {

  isChecked: boolean;

  constructor(public readonly collaboratorService: CollaboratorsService) {
    this.isChecked = this.collaboratorService.rotationMode === 'Random';
  }

  switch(mode: boolean): void {
    if (mode) {
      this.collaboratorService.changeMode('Random');
    } else {
      this.collaboratorService.changeMode('List');
    }
  }

}
