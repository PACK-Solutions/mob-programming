import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';
import { TimerService } from './timer.service';

describe('TimerService', () => {
  let service: TimerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ],
      imports: [
        MatSnackBarModule,
        TranslateModule.forRoot()
      ]
    }).compileComponents();
    service = TestBed.inject(TimerService);
  });

  it('should be created', () => {
     expect(service).toBeDefined();
  });

});
