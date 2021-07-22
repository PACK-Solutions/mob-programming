import { Collaborator } from './collaborator.model';
import {TestBed} from '@angular/core/testing';
import {AppComponent} from '../../../app.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MainListComponent} from '../../../main/main-list/main-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';

describe('Collaborateur', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [RouterTestingModule, TranslateModule.forRoot(), MatMenuModule, MatSnackBarModule ]
    })
      .compileComponents();
  });

  it('should create an instance', () => {
    // @ts-ignore
    expect(new Collaborator()).toBeTruthy();
  });

});
