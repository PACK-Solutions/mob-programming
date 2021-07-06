import {Component, OnInit} from '@angular/core';
import {CollaboratorsService} from '../../service/collaborators.service';



@Component({
  selector: 'app-shuffle-collaborator',
  templateUrl: './shuffle-collaborator.component.html',
  styleUrls: ['./shuffle-collaborator.component.css']
})

export class ShuffleCollaboratorComponent implements OnInit {

  constructor(private collaboratorService: CollaboratorsService) { }

  ngOnInit(): void { }

  /**
   * Method for call shuffle whit an array in param
   */
  shuffleUsers(): void {
    this.collaboratorService.shuffle();
  }


}
