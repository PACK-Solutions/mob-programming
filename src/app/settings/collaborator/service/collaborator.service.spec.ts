import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';
import { CollaboratorsService } from './collaborators.service';

describe('CollaboratorService', () => {
  let service: CollaboratorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
        TranslateModule.forRoot()
      ]
    });
    service = TestBed.inject(CollaboratorsService);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

});
