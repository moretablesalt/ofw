import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyShieldComponent } from './family-shield.component';

describe('FamilyShieldComponent', () => {
  let component: FamilyShieldComponent;
  let fixture: ComponentFixture<FamilyShieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilyShieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyShieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
