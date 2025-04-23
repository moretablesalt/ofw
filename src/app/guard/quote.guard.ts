import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {QuoteCalculatorService} from '../services/quote-calculator.service';

export const quoteGuard: CanActivateFn = (route, state) => {
  const quoteCalculatorService = inject(QuoteCalculatorService);
  const router = inject(Router);
  if (quoteCalculatorService.getQuote()) {
    return true;
  }

  router.navigate(['/']);
  return false;
};
