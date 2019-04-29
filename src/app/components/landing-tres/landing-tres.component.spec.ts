import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingTresComponent } from './landing-tres.component';

describe('LandingTresComponent', () => {
  let component: LandingTresComponent;
  let fixture: ComponentFixture<LandingTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
