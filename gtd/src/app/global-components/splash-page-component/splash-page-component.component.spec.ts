import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashPageComponentComponent } from './splash-page-component.component';

describe('SplashPageComponentComponent', () => {
  let component: SplashPageComponentComponent;
  let fixture: ComponentFixture<SplashPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
