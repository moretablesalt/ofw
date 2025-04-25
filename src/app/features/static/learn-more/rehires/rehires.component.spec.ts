import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehiresComponent } from './rehires.component';

describe('RehiresComponent', () => {
  let component: RehiresComponent;
  let fixture: ComponentFixture<RehiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RehiresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RehiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
