import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehiresTableComponent } from './rehires-table.component';

describe('RehiresTableComponent', () => {
  let component: RehiresTableComponent;
  let fixture: ComponentFixture<RehiresTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RehiresTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RehiresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
