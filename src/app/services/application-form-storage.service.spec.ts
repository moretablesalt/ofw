import { TestBed } from '@angular/core/testing';

import { ApplicationFormStorageService } from './application-form-storage.service';

describe('ApplicationFormStorageService', () => {
  let service: ApplicationFormStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationFormStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
