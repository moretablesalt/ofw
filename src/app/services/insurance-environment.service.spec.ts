import { TestBed } from '@angular/core/testing';

import { InsuranceEnvironmentService } from './insurance-environment.service';

describe('InsuranceEnvironmentService', () => {
  let service: InsuranceEnvironmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceEnvironmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
