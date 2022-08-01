import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Libro4Component } from './libro4.component';

describe('Libro4Component', () => {
  let component: Libro4Component;
  let fixture: ComponentFixture<Libro4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Libro4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Libro4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
