import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompulsoryTableComponent } from './compulsory-table.component';

describe('CompulsoryTableComponent', () => {
  let component: CompulsoryTableComponent;
  let fixture: ComponentFixture<CompulsoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompulsoryTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompulsoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
