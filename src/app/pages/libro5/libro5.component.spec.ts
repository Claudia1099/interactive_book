import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Libro5Component } from './libro5.component';

describe('Libro5Component', () => {
  let component: Libro5Component;
  let fixture: ComponentFixture<Libro5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Libro5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Libro5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
