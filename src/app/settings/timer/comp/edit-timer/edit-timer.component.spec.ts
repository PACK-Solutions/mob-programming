import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { TimerPipe } from '../../pipe/timer.pipe';
import { EditTimerComponent } from './edit-timer.component';

describe('EditTimerComponent', () => {
  let component: EditTimerComponent;
  let fixture: ComponentFixture<EditTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EditTimerComponent,
        TimerPipe
      ],
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

});
