import {Component, Input} from '@angular/core';
import {Collaborator} from '../../model/collaborator.model';
import {CollaboratorsService} from '../../service/collaborators.service';

@Component({
  selector: 'app-edit-collaborator',
  templateUrl: './edit-collaborator.component.html',
  styleUrls: ['./edit-collaborator.component.css']
})
export class EditCollaboratorComponent {

  @Input() collaborator?: Collaborator;
  @Input() removeCollaborator !: CallableFunction;

  constructor(public collaboratorService: CollaboratorsService) { }

}
