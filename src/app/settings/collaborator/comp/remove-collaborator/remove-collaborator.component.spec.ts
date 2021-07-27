import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { RemoveCollaboratorComponent } from './remove-collaborator.component';

describe('RemoveCollaboratorComponent', () => {
  let component: RemoveCollaboratorComponent;
  let fixture: ComponentFixture<RemoveCollaboratorComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RemoveCollaboratorComponent
      ],
      imports: [
        MatIconModule,
        MatSnackBarModule,
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCollaboratorComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
   });

  it('should have created button', () => {
    expect(de.query(By.css('button mat-icon')).nativeElement.innerText).toBe('delete');
  });

});
