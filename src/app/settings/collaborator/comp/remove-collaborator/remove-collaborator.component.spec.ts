import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCollaboratorComponent } from './remove-collaborator.component';
import {AppComponent} from '../../../../app.component';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {By} from '@angular/platform-browser';

describe('RemoveCollaboratorComponent', () => {
  let component: RemoveCollaboratorComponent;
  let fixture: ComponentFixture<RemoveCollaboratorComponent>;
  let de: DebugElement;

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
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
   });

  it('should have created button', () => {
    expect(de.query(By.css('button')).nativeElement.innerText);
  });

  it('should have created mat-icon', () => {
    expect(de.query(By.css('mat-icon')).nativeElement.innerText);
  });

});
