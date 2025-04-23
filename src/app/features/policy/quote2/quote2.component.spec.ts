import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quote2Component } from './quote2.component';

describe('Quote2Component', () => {
  let component: Quote2Component;
  let fixture: ComponentFixture<Quote2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quote2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quote2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
