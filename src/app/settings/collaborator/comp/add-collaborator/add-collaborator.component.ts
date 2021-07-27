import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Collaborator } from '../../model/collaborator.model';
import { CollaboratorsService } from '../../service/collaborators.service';

@Component({
  selector: 'app-add-collaborator',
  templateUrl: './add-collaborator.component.html',
  styleUrls: [ './add-collaborator.component.css' ]
})
export class AddCollaboratorComponent implements OnInit {

  constructor(private readonly collaboratorsService: CollaboratorsService) { }

  public collaboratorForm!: FormGroup;

  ngOnInit(): void {
    // Creating the groupe of object. CollaboratorId is a available key.
    this.collaboratorForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    // if the form isn't valide, we can't send it
    if (this.collaboratorForm.invalid) {
      alert('Please, fill the name.');
      return;
    }

    // Creating an object newCollaborator that takes the informations used in the form
    const newCollaborator = new Collaborator(
      this.collaboratorsService.collaborators.length + 1,
      this.collaboratorForm.controls.name.value);
    // Calling the method addCollaborator from collaborator Service for adding a new entry
    this.collaboratorsService.addCollaborator(newCollaborator);

    // @ts-ignore
    document.getElementById('addForm').reset();
  }

}
