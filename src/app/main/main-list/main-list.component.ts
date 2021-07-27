import { Component } from '@angular/core';
import { CollaboratorsService } from '../../settings/collaborator/service/collaborators.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent {

  constructor(public readonly collaboratorService: CollaboratorsService) { }

}
