import { TestBed } from '@angular/core/testing';

import { ApplicationBuilderService } from './application-builder.service';

describe('ApplicationBuilderService', () => {
  let service: ApplicationBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
