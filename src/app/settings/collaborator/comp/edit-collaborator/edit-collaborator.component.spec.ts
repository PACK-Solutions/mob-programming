import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCollaboratorComponent } from './edit-collaborator.component';
import {AppComponent} from '../../../../app.component';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {By} from '@angular/platform-browser';

describe('EditCollaboratorComponent', () => {
  let component: EditCollaboratorComponent;
  let fixture: ComponentFixture<EditCollaboratorComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCollaboratorComponent ],
      imports : [RouterTestingModule, TranslateModule.forRoot(), MatMenuModule, MatSnackBarModule  ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCollaboratorComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
     expect(component).toBeTruthy();
   });


  it('should have div created', () => {
    expect(de.query(By.css('div')));
  });

  it('should have created mat-form-field', () => {
    expect(de.query(By.css('mat-form-field')));
  });

  it('should have collaborator list', () => {
    expect(de.query(By.css('.testinputcollaborator')));
  });

  it('should have app-remove-collaborator created', () => {
    expect(de.query(By.css('app-remove-collaborator')));
  });

});
