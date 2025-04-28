import {inject, Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TimeHelperService } from './time-helper.service';
import { format } from 'date-fns';

export class QuoteModel {
  insuranceType!: string;
  startDate!: Date;
  endDate!: Date;
}

@Injectable({
  providedIn: 'root'
})
export class QuoteDetailsStorageService {
  private readonly storageKey = 'quote-details';
  private quoteDetails$ = new BehaviorSubject<QuoteModel | null>(null);
  private timeHelerService = inject(TimeHelperService);

  constructor() {
    const saved = sessionStorage.getItem(this.storageKey);
    if (saved) {
      this.quoteDetails$.next(JSON.parse(saved));
    }
  }

  setQuoteDetails(data: any): void {
    this.quoteDetails$.next(data);
    sessionStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  getQuoteDetails(): QuoteModel | null {
    return this.quoteDetails$.getValue();
  }

  observeQuoteDetails() {
    return this.quoteDetails$.asObservable();
  }

  clear(): void {
    this.quoteDetails$.next(null);
    sessionStorage.removeItem(this.storageKey);
  }

  getStartDateClean() {
    const startDate = this.getQuoteDetails()?.startDate;
    if (startDate) {
      return format(new Date(startDate), 'yyyy-MM-dd');
    }
    return null;
  }

  getEndDateClean() {
    const endDate = this.getQuoteDetails()?.endDate;
    if (endDate) {
      return format(new Date(endDate), 'yyyy-MM-dd');
    }
    return null;
  }

  getPeriod() {
    const details = this.getQuoteDetails();
    if (details?.startDate && details?.endDate) {
      return this.timeHelerService.calculateMonths(details.startDate, details.endDate);
    }
    return 0;
  }
}
