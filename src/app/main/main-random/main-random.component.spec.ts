import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRandomComponent } from './main-random.component';
import {AppComponent} from '../../app.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';

describe('MainRandomComponent', () => {
  let component: MainRandomComponent;
  let fixture: ComponentFixture<MainRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRandomComponent ],
      imports : [ RouterTestingModule, TranslateModule.forRoot(), MatMenuModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
     expect(component).toBeTruthy();
   });

});
