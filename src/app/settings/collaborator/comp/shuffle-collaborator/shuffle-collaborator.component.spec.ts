import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { ShuffleCollaboratorComponent } from './shuffle-collaborator.component';

describe('ShuffleUserComponent', () => {
  let component: ShuffleCollaboratorComponent;
  let fixture: ComponentFixture<ShuffleCollaboratorComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ShuffleCollaboratorComponent
      ],
      imports: [
        MatSnackBarModule,
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuffleCollaboratorComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have shuffle button', () => {
    expect(de.query(By.css('button')).nativeElement.innerText).toBe('shuffle');
  });

});
