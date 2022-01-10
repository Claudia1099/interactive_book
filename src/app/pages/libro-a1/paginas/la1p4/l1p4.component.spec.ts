import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L1p4Component } from './l1p4.component';

describe('L1p4Component', () => {
  let component: L1p4Component;
  let fixture: ComponentFixture<L1p4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L1p4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L1p4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
