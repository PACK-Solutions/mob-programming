import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import {AppComponent} from '../app.component';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {MainListComponent} from '../main/main-list/main-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {By} from '@angular/platform-browser';

describe('MainPageComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsComponent ],
      imports : [RouterTestingModule, TranslateModule.forRoot(), MatMenuModule, MatSnackBarModule ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
     expect(component).toBeTruthy();
   });


  it('should have div created', () => {
    expect(de.query(By.css('div')).nativeElement.innerText);
  });

  it('should have app-edit-timer created', () => {
    expect(de.query(By.css('app-edit-timer')).nativeElement.innerText);
  });

  it('should have mat-card created', () => {
    expect(de.query(By.css('mat-card')).nativeElement.innerText);
  });

  it('should have mat-card-title created', () => {
    expect(de.query(By.css('mat-card-title')).nativeElement.innerText);
  });

  it('should have mat-card-subtitle created', () => {
    expect(de.query(By.css('mat-card-subtitle')).nativeElement.innerText);
  });

  it('should have app-add-collaborator created', () => {
    expect(de.query(By.css('app-add-collaborator')).nativeElement.innerText);
  });

  it('should have app-array-collaborator created', () => {
    expect(de.query(By.css('app-array-collaborator')).nativeElement.innerText);
  });

});
