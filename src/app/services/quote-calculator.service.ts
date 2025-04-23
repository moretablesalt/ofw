import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteCalculatorService {

  private quote = signal<number | null>(null);

  setQuote(value: number | null) {
    this.quote.set(value);
  }

  getQuote() {
    return this.quote();
  }

  quoteSignal = this.quote;

  constructor() { }
}
