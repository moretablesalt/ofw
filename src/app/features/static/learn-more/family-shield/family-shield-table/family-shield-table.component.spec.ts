import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyShieldTableComponent } from './family-shield-table.component';

describe('FamilyShieldTableComponent', () => {
  let component: FamilyShieldTableComponent;
  let fixture: ComponentFixture<FamilyShieldTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilyShieldTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyShieldTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
