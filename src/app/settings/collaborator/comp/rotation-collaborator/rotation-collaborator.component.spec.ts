import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotationCollaboratorComponent } from './rotation-collaborator.component';
import {AppComponent} from '../../../../app.component';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {By} from '@angular/platform-browser';

describe('RotationCollaboratorComponent', () => {
  let component: RotationCollaboratorComponent;
  let fixture: ComponentFixture<RotationCollaboratorComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotationCollaboratorComponent ],
      imports : [RouterTestingModule, TranslateModule.forRoot(), MatMenuModule, MatSnackBarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotationCollaboratorComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
     expect(component).toBeTruthy();
   });


  it('should have test list mode', () => {
    expect(de.query(By.css('testlistmode')));
  });

  it('should have test random mode', () => {
    expect(de.query(By.css('testrandommode')));
  });

  it('should have created mat-slide-toggle', () => {
    expect(de.query(By.css('mat-slide-toggle')).nativeElement.innerText);
  });
});
