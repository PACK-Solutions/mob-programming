import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainListComponent } from './main-list.component';
import { AppComponent } from '../../app.component';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';

describe('MainListComponent', () => {
  let component: MainListComponent;
  let fixture: ComponentFixture<MainListComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainListComponent ],
      imports : [RouterTestingModule, TranslateModule.forRoot(), MatMenuModule, MatSnackBarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
     expect(component).toBeTruthy();
   });

  it('should have app add timer', () => {
    expect(de.query(By.css('.testingappaddtimer')).nativeElement.innerText);
  });

  it('should have matcard collaborator name', () => {
    expect(de.query(By.css('.testingmatcard-collaboratorname')).nativeElement.innerText);
  });

  it('should have matcard next card', () => {
    expect(de.query(By.css('.testingmatcardnextcard')).nativeElement.innerText);
  });

  it('should have collaborator list', () => {
    expect(de.query(By.css('.collaboratorsList')));
  });

});
