import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { Collaborator } from '../../model/collaborator.model';
import { RemoveCollaboratorComponent } from '../remove-collaborator/remove-collaborator.component';
import { EditCollaboratorComponent } from './edit-collaborator.component';

describe('EditCollaboratorComponent', () => {
  let component: EditCollaboratorComponent;
  let fixture: ComponentFixture<EditCollaboratorComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EditCollaboratorComponent,
        RemoveCollaboratorComponent
      ],
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        NoopAnimationsModule,
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();
    TestBed.overrideTemplateUsingTestingModule(RemoveCollaboratorComponent, '');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCollaboratorComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should not have div to edit collaborator', () => {
    expect(de.query(By.css('div'))).toBeNull();
  });

  it('should have div to edit collaborator', () => {
    fixture.componentInstance.collaborator = new Collaborator(1, 'John');
    fixture.detectChanges();
    expect(de.query(By.css('div input'))).toBeDefined();
  });

});
