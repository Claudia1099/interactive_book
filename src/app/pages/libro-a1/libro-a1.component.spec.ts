import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroA1Component } from './libro-a1.component';

describe('LibroA1Component', () => {
  let component: LibroA1Component;
  let fixture: ComponentFixture<LibroA1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroA1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
