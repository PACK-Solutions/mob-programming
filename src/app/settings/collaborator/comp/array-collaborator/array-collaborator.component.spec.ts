import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { RotationCollaboratorComponent } from '../rotation-collaborator/rotation-collaborator.component';
import { ShuffleCollaboratorComponent } from '../shuffle-collaborator/shuffle-collaborator.component';
import { ArrayCollaboratorComponent } from './array-collaborator.component';

describe('ArrayCollaboratorComponent', () => {
  let component: ArrayCollaboratorComponent;
  let fixture: ComponentFixture<ArrayCollaboratorComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ArrayCollaboratorComponent,
        RotationCollaboratorComponent,
        ShuffleCollaboratorComponent
      ],
      imports: [
        MatSnackBarModule,
        RouterTestingModule,
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();
    TestBed.overrideTemplateUsingTestingModule(RotationCollaboratorComponent, '');
    TestBed.overrideTemplateUsingTestingModule(ShuffleCollaboratorComponent, '');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayCollaboratorComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

});
