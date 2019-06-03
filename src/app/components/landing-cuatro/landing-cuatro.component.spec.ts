import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCuatroComponent } from './landing-cuatro.component';

describe('LandingCuatroComponent', () => {
  let component: LandingCuatroComponent;
  let fixture: ComponentFixture<LandingCuatroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingCuatroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
