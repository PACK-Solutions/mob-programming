import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { AddCollaboratorComponent } from './collaborator/comp/add-collaborator/add-collaborator.component';
import { ArrayCollaboratorComponent } from './collaborator/comp/array-collaborator/array-collaborator.component';
import { Collaborator } from './collaborator/model/collaborator.model';
import { CollaboratorsService } from './collaborator/service/collaborators.service';
import { SettingsComponent } from './settings.component';
import { EditTimerComponent } from './timer/comp/edit-timer/edit-timer.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let de: DebugElement;
  let collaboratorService: CollaboratorsService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        AddCollaboratorComponent,
        ArrayCollaboratorComponent,
        EditTimerComponent,
        SettingsComponent
      ],
      imports: [
        MatCardModule,
        MatSnackBarModule,
        RouterTestingModule,
        TranslateModule.forRoot()
      ]
    }).compileComponents();
    TestBed.overrideTemplateUsingTestingModule(AddCollaboratorComponent, '').compileComponents();
    TestBed.overrideTemplateUsingTestingModule(ArrayCollaboratorComponent, '').compileComponents();
    TestBed.overrideTemplateUsingTestingModule(EditTimerComponent, '').compileComponents();
    collaboratorService = TestBed.inject(CollaboratorsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });

  it('should have app-edit-timer created', () => {
    expect(de.query(By.css('app-edit-timer'))).toBeDefined();
  });

  it('should have mat-card-title created', () => {
    expect(de.query(By.css('mat-card-title')).nativeElement.innerText).toBe('current');
  });

  it('should have no current collaborator', () => {
    expect(de.query(By.css('mat-card-subtitle span')).nativeElement.innerText).toBe('-');
  });

  it('should have current collaborator', () => {
    collaboratorService.addCollaborator(new Collaborator(1, 'John'));
    fixture.detectChanges();
    expect(de.query(By.css('mat-card-subtitle span')).nativeElement.innerText).toBe('John');
  });

  it('should have app-add-collaborator created', () => {
    expect(de.query(By.css('app-add-collaborator'))).toBeDefined();
  });

  it('should have app-array-collaborator created', () => {
    expect(de.query(By.css('app-array-collaborator'))).toBeDefined();
  });

});
