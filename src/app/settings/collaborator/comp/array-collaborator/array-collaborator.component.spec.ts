import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayCollaboratorComponent } from './array-collaborator.component';
import {AppComponent} from '../../../../app.component';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {By} from '@angular/platform-browser';

describe('ArrayCollaboratorComponent', () => {
  let component: ArrayCollaboratorComponent;
  let fixture: ComponentFixture<ArrayCollaboratorComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayCollaboratorComponent ],
      imports : [RouterTestingModule, TranslateModule.forRoot(), MatMenuModule, MatSnackBarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayCollaboratorComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
     expect(component).toBeTruthy();
   });

  it('should have app-edit-collaborator created', () => {
    expect(de.query(By.css('app-edit-collaborator')));
  });
  it('should have app-shuffle-collaborator created', () => {
    expect(de.query(By.css('app-shuffle-collaborator')).nativeElement.innerText);
  });

  it('should have app-rotation-collaborator created', () => {
    expect(de.query(By.css('app-rotation-collaborator')).nativeElement.innerText);
  });

  it('should have button startTimer created', () => {
    expect(de.query(By.css('.testarraycollaborator')));
  });

});
