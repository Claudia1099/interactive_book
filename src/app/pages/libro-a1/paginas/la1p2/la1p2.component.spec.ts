import { ComponentFixture, TestBed } from '@angular/core/testing';

import { La1p2Component } from './la1p2.component';

describe('La1p2Component', () => {
  let component: La1p2Component;
  let fixture: ComponentFixture<La1p2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ La1p2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(La1p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
