import { Component } from '@angular/core';
import { CollaboratorsService } from './collaborator/service/collaborators.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './settings.component.html',
  styleUrls: [ './settings.component.css' ]
})
export class SettingsComponent {

  constructor(public readonly collaboratorService: CollaboratorsService) { }

}
