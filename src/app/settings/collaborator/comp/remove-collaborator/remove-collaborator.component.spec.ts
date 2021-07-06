import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCollaboratorComponent } from './remove-collaborator.component';
import {AppComponent} from '../../../../app.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';

describe('RemoveCollaboratorComponent', () => {
  let component: RemoveCollaboratorComponent;
  let fixture: ComponentFixture<RemoveCollaboratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveCollaboratorComponent ],
      imports : [RouterTestingModule, TranslateModule.forRoot(), MatMenuModule, MatSnackBarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
   });

});
