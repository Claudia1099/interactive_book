import { ComponentFixture, TestBed } from '@angular/core/testing';

import { La1p1Component } from './la1p1.component';

describe('La1p1Component', () => {
  let component: La1p1Component;
  let fixture: ComponentFixture<La1p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ La1p1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(La1p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
