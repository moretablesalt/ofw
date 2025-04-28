import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
}
