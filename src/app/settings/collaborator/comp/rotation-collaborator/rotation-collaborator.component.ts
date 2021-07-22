import { Component, OnInit } from '@angular/core';
import {CollaboratorsService} from '../../service/collaborators.service';

@Component({
  selector: 'app-rotation-collaborator',
  templateUrl: './rotation-collaborator.component.html',
  styleUrls: ['./rotation-collaborator.component.css']
})
export class RotationCollaboratorComponent implements OnInit {
  isChecked: boolean;

  constructor(public collaboratorService: CollaboratorsService) {
    this.isChecked = this.collaboratorService.rotationMode === 'Random';
  }

  ngOnInit(): void {}

  switch(mode: boolean): void {
    if (mode) {
      this.collaboratorService.changeMode('Random');
    }
    else {
      this.collaboratorService.changeMode('List');
    }
  }

}
