import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeBasicComponent } from './home-basic.component';
import { DebugElement } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';
import { By } from '@angular/platform-browser';

describe('HomeBasicComponent', () => {
  let component: HomeBasicComponent;
  let fixture: ComponentFixture<HomeBasicComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBasicComponent ],
      imports: [RouterTestingModule, TranslateModule.forRoot(), MatMenuModule ]
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
     expect(component).toBeTruthy();
   });

  it('should have buttons tag createSession', () => {
    expect(de.query(By.css('button')).nativeElement.innerText).toBe('createSession');
  });

  it('should have mat-card tag create', () => {
    expect(de.query(By.css('mat-card')).nativeElement.innerText).toBe('Mob Programming');
  });



});
