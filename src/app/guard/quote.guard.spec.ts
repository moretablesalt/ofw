import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { quoteGuard } from './quote.guard';

describe('quoteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => quoteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
