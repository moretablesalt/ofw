import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteCalculatorService {

  private readonly STORAGE_KEY = 'quote';
  private quote = signal<number | null>(this.loadQuote());

  constructor() {
    // Automatically save to sessionStorage when the signal changes
    effect(() => {
      const value = this.quote();
      if (value === null) {
        sessionStorage.removeItem(this.STORAGE_KEY);
      } else {
        sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(value));
      }
    });
  }

  setQuote(value: number | null) {
    this.quote.set(value);
  }

  getQuote() {
    return this.quote();
  }

  private loadQuote(): number | null {
    const raw = sessionStorage.getItem(this.STORAGE_KEY);
    return raw ? Number(raw) : null;
  }
}
