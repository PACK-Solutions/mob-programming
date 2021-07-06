import { Component, OnInit } from '@angular/core';
import {CollaboratorsService} from './collaborator/service/collaborators.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(public collaboratorService: CollaboratorsService) { }

  ngOnInit(): void {
  }


}
