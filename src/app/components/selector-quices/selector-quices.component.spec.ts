import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorQuicesComponent } from './selector-quices.component';

describe('SelectorQuicesComponent', () => {
  let component: SelectorQuicesComponent;
  let fixture: ComponentFixture<SelectorQuicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorQuicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorQuicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
