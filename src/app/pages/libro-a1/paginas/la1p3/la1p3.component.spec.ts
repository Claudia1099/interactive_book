import { ComponentFixture, TestBed } from '@angular/core/testing';

import { La1p3Component } from './la1p3.component';

describe('La1p3Component', () => {
  let component: La1p3Component;
  let fixture: ComponentFixture<La1p3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ La1p3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(La1p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
