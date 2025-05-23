import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportComponent } from './passport.component';

describe('PassportComponent', () => {
  let component: PassportComponent;
  let fixture: ComponentFixture<PassportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
