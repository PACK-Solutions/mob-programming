import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCollaboratorComponent } from './add-collaborator.component';
import {AppComponent} from '../../../../app.component';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {By} from '@angular/platform-browser';

describe('AddCollaboratorComponent', () => {
  let component: AddCollaboratorComponent;
  let fixture: ComponentFixture<AddCollaboratorComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCollaboratorComponent ],
      imports : [RouterTestingModule, TranslateModule.forRoot(), MatMenuModule, MatSnackBarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCollaboratorComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
     expect(component).toBeTruthy();
   });

  it('should have created form', () => {
    expect(de.query(By.css('form')).nativeElement.innerText);
  });

  it('should have created mat-form-field', () => {
    expect(de.query(By.css('mat-form-field')).nativeElement.innerText);
  });

  it('should have created mat-label', () => {
    expect(de.query(By.css('mat-label')).nativeElement.innerText);
  });

  it('should have created input', () => {
    expect(de.query(By.css('input')).nativeElement.innerText);
  });

  it('should have button crated testaddcollaborator', () => {
    expect(de.query(By.css('.testaddcollaborator')).nativeElement.innerText).toBe('add_box');
  });

});
