import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { Collaborator } from '../model/collaborator.model';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorsService {

  public currentCollaborator: Collaborator;
  public rotationMode: string;
  public collaboratorRandom!: Collaborator[];

  public collaborators: Collaborator[] = [];

  constructor(private readonly snackBar: MatSnackBar, private readonly translate: TranslateService) {
    this.currentCollaborator = this.collaborators[0];
    this.rotationMode = 'List';
    this.updateRandomList();
  }

  getAllCollaborators(): Collaborator[] {
    return this.collaborators;
  }

  public addCollaborator(collaboratorToAdd: Collaborator): void {
    this.collaborators.push(collaboratorToAdd);
    this.collaboratorRandom.push(collaboratorToAdd);
    if (this.collaborators.length === 1){
      this.currentCollaborator = this.collaborators[0];
    }
  }

  public removeCollaborator(id: number): void {

    this.collaborators = this.collaborators.filter( (collaborator) => {
      return collaborator.id !== id;
    });

    this.collaboratorRandom = this.collaboratorRandom.filter( (collaborator) => {
      return collaborator.id !== id;
    });
  }

  private updateRandomList(): Collaborator[] {
    this.collaboratorRandom = [];
    for (const collaborator of this.collaborators){
      this.collaboratorRandom.push(collaborator);
    }
    return this.collaboratorRandom;
  }

  /**
   * Method static for shuffle a array
   */
  public shuffle(): Collaborator[] {
    for (let i = this.collaborators.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.collaborators[i], this.collaborators[j]] = [this.collaborators[j], this.collaborators[i]];
    }

    if (this.rotationMode === 'List') {
      this.currentCollaborator = this.collaborators[0];
    }
    return this.collaborators;
  }

  changeMode(mode: string): void {
    this.rotationMode = mode;

    if (mode === 'Random'){
      this.collaboratorRandom = this.updateRandomList();
      this.collaboratorRandom.sort(() => {
        return 0.5 - Math.random();
      });
      this.currentCollaborator = this.collaboratorRandom[0];
    }
    else {
      this.currentCollaborator = this.collaborators[0];
    }
  }

  nextCollaborator(): Collaborator {
    if (this.rotationMode === 'Random') {
      if (this.collaboratorRandom.indexOf(this.currentCollaborator) === this.collaboratorRandom.length - 1) {
        this.collaboratorRandom = this.updateRandomList();
        this.collaboratorRandom.sort(() => {
          return 0.5 - Math.random();
        });
        this.currentCollaborator = this.collaboratorRandom[0];
      }
      else {
        this.currentCollaborator = this.collaboratorRandom[this.collaboratorRandom.indexOf(this.currentCollaborator) + 1];
      }
    } else {
      if (this.collaborators.indexOf(this.currentCollaborator) === this.collaborators.length - 1) {
        this.currentCollaborator = this.collaborators[0];
      }
      else {
        this.currentCollaborator = this.collaborators[this.collaborators.indexOf(this.currentCollaborator) + 1];
      }
    }
    this.translate.get('snackNext').subscribe((res: string[]) => {
      this.snackBar.open(res[0] + this.currentCollaborator.name + res[1], undefined, {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    });
    return this.currentCollaborator;
  }

}
