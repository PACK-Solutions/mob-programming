import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavAuthGuard } from './nav-auth.guard';
import {TranslateModule} from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';

describe('NavAuthGuard', () => {
  let guard: NavAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot(), MatMenuModule ]
    });
    guard = TestBed.inject(NavAuthGuard);
  });

  it('should be created', () => {
  expect(guard).toBeTruthy();
  });
});
