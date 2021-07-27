import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        MatIconModule,
        MatMenuModule,
        MatToolbarModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have buttons tag home', () => {
    expect(de.query(By.css('.testingbuttonhome')).nativeElement.innerText).toBe('home');
  });

  it('should have buttons tag Settings', () => {
    expect(de.query(By.css('.testingbuttonbuild')).nativeElement.innerText).toBe('build');
  });

  it('should have buttons tag play_circle_outline', () => {
    expect(de.query(By.css('.testingbuttonplay_circle_outline')).nativeElement.innerText).toBe('play_circle_outline');
  });

  it('should have buttons tag language', () => {
    expect(de.query(By.css('.testingbuttonlanguage')).nativeElement.innerText).toBe('language');
  });

});
