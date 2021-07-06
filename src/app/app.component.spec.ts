import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [RouterTestingModule, TranslateModule.forRoot(), MatMenuModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  // it('should create the app', () => {
   //   expect(app).toBeTruthy();
   // });

  // it(`should have as title 'module-test-app'`, () => {
   //   expect(app.title).toEqual('module-test-app');
   // });

  // fit('should render title in a h1 tag', () => {
  //    const compiled = fixture.debugElement.nativeElement;
  //    expect(compiled.querySelector('h1').textContent)
  //      .toContain('module-test-app');
  //  });
  });
