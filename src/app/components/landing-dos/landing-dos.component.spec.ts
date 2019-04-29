import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingDosComponent } from './landing-dos.component';

describe('LandingDosComponent', () => {
  let component: LandingDosComponent;
  let fixture: ComponentFixture<LandingDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
