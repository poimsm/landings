import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Landing05Component } from './landing05.component';

describe('Landing05Component', () => {
  let component: Landing05Component;
  let fixture: ComponentFixture<Landing05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Landing05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Landing05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
