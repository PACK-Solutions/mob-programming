import { TestBed } from '@angular/core/testing';

import { CollaboratorsService } from './collaborators.service';
import {AppComponent} from '../../../app.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';

describe('CollaborateurService', () => {
  let service: CollaboratorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot(), MatMenuModule, MatSnackBarModule ]
    });
    service = TestBed.inject(CollaboratorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
