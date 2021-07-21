import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuffleCollaboratorComponent } from './shuffle-collaborator.component';
import {AppComponent} from '../../../../app.component';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {By} from '@angular/platform-browser';

describe('ShuffleUserComponent', () => {
  let component: ShuffleCollaboratorComponent;
  let fixture: ComponentFixture<ShuffleCollaboratorComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShuffleCollaboratorComponent ],
      imports: [RouterTestingModule, TranslateModule.forRoot(), MatMenuModule, MatSnackBarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuffleCollaboratorComponent);
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

  it('should have button created', () => {
    expect(de.query(By.css('button')));
  });

});
