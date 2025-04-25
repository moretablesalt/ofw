import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompulsoryComponent } from './compulsory.component';

describe('CompulsoryComponent', () => {
  let component: CompulsoryComponent;
  let fixture: ComponentFixture<CompulsoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompulsoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompulsoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
