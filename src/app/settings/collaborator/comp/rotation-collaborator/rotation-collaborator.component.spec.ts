import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { RotationCollaboratorComponent } from './rotation-collaborator.component';

describe('RotationCollaboratorComponent', () => {
  let component: RotationCollaboratorComponent;
  let fixture: ComponentFixture<RotationCollaboratorComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RotationCollaboratorComponent
      ],
      imports: [
        FormsModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        TranslateModule.forRoot()
      ]
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
    expect(component).toBeDefined();
  });

  it('should have test list mode', () => {
    expect(de.query(By.css('.testlistmode')).nativeElement.innerText).toBe('listMode');
  });

  it('should have test random mode', () => {
    expect(de.query(By.css('.testrandommode')).nativeElement.innerText).toBe('randomMode');
  });

});
