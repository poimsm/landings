import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandEstiloComponent } from './land-estilo.component';

describe('LandEstiloComponent', () => {
  let component: LandEstiloComponent;
  let fixture: ComponentFixture<LandEstiloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandEstiloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandEstiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
