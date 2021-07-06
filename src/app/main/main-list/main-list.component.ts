import {Component, OnInit} from '@angular/core';
import {CollaboratorsService} from '../../settings/collaborator/service/collaborators.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {

  constructor(public collaboratorService: CollaboratorsService) { }

  ngOnInit(): void {
  }

}
