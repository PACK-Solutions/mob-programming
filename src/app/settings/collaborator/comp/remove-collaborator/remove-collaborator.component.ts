import {Component, Input, OnInit} from '@angular/core';
import {CollaboratorsService} from '../../service/collaborators.service';
import {Collaborator} from '../../model/collaborator.model';

@Component({
  selector: 'app-remove-collaborator',
  templateUrl: './remove-collaborator.component.html',
  styleUrls: ['./remove-collaborator.component.css']
})
export class RemoveCollaboratorComponent implements OnInit {
  @Input() collaborator!: Collaborator;

  constructor(private collaboratorService: CollaboratorsService) {
  }

  ngOnInit(): void {
  }


  public removeCollaborators(): void{
    if (this.collaborator === this.collaboratorService.currentCollaborator) {
      this.collaboratorService.nextCollaborator();
    }
    this.collaboratorService.removeCollaborator(this.collaborator.id);
  }
}
