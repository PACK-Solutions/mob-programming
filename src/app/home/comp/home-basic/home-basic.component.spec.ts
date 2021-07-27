import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { HomeBasicComponent } from './home-basic.component';

describe('HomeBasicComponent', () => {
  let component: HomeBasicComponent;
  let fixture: ComponentFixture<HomeBasicComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeBasicComponent
      ],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        MatCardModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBasicComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
     expect(component).toBeDefined();
   });

  it('should have buttons tag createSession', () => {
    expect(de.query(By.css('button')).nativeElement.innerText).toBe('createSession');
  });

  it('should have mat-card tag create', () => {
    expect(de.query(By.css('mat-card')).nativeElement.innerText).toBe('Mob Programming');
  });

});
