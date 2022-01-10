import { ComponentFixture, TestBed } from '@angular/core/testing';

import { La1p4Component } from './la1p4.component';

describe('La1p4Component', () => {
  let component: La1p4Component;
  let fixture: ComponentFixture<La1p4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ La1p4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(La1p4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
