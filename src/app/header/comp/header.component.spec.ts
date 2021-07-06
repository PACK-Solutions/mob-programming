import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import {TranslateModule} from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [RouterTestingModule, TranslateModule.forRoot(), MatMenuModule]
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
    expect(component).toBeTruthy();
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
