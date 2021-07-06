import { Injectable } from '@angular/core';
import {CollaboratorsService} from '../../collaborator/service/collaborators.service';



@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(collaboratorService: CollaboratorsService) {

  }


}
