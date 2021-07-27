import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { Collaborator } from '../../settings/collaborator/model/collaborator.model';
import { CollaboratorsService } from '../../settings/collaborator/service/collaborators.service';
import { AddTimerComponent } from '../../settings/timer/comp/add-timer/add-timer.component';
import { MainListComponent } from './main-list.component';

describe('MainListComponent', () => {
  let component: MainListComponent;
  let fixture: ComponentFixture<MainListComponent>;
  let de: DebugElement;
  let collaboratorService: CollaboratorsService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        AddTimerComponent,
        MainListComponent
      ],
      imports: [
        TranslateModule.forRoot(),
        MatCardModule,
        MatSnackBarModule
      ]
    });
    TestBed.overrideTemplateUsingTestingModule(AddTimerComponent, '').compileComponents();
    collaboratorService = TestBed.inject(CollaboratorsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
     expect(component).toBeDefined();
   });

  it('should have app add timer', () => {
    expect(de.query(By.css('.testingappaddtimer'))).toBeDefined();
  });

  it('should have no current and next collaborators', () => {
    expect(de.query(By.css('.testingmatcard-collaboratorname span')).nativeElement.innerText).toBe('-');
    expect(de.query(By.css('.testingmatcardnextcard div')).nativeElement.innerText).toBe('-');
  });

  it('should have one current / next collaborator', () => {
    collaboratorService.addCollaborator(new Collaborator(1, 'John'));
    fixture.detectChanges();
    expect(de.query(By.css('.testingmatcard-collaboratorname span')).nativeElement.innerText).toBe('John');
    expect(de.query(By.css('.testingmatcardnextcard div')).nativeElement.innerText).toBe('John');
  });

  it('should have different current / next collaborators', () => {
    collaboratorService.addCollaborator(new Collaborator(1, 'John'));
    collaboratorService.addCollaborator(new Collaborator(2, 'Marc'));
    fixture.detectChanges();
    expect(de.query(By.css('.testingmatcard-collaboratorname span')).nativeElement.innerText).toBe('John');
    expect(de.query(By.css('.testingmatcardnextcard div')).nativeElement.innerText).toBe('Marc');
  });

});
