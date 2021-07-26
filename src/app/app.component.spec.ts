import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ]
    }).compileComponents();
    translateService = TestBed.inject(TranslateService);
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should use "fr" lang', () => {
    spyOn(translateService, 'getBrowserLang').and.returnValue('fr');
    spyOn(translateService, 'use').and.stub();
    fixture.componentInstance.ngOnInit();
    expect(translateService.use).toHaveBeenCalledWith('fr');
  });

  it('should use default lang', () => {
    spyOn(translateService, 'getBrowserLang').and.returnValue('unknown');
    spyOn(translateService, 'use').and.stub();
    fixture.componentInstance.ngOnInit();
    expect(translateService.use).not.toHaveBeenCalled();
  });

});
