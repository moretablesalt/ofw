import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationFormStorageService {
  private readonly storageKey = 'application-form';
  private formData$ = new BehaviorSubject<any>(null);

  constructor() {
    const saved = sessionStorage.getItem(this.storageKey);
    if (saved) {
      this.formData$.next(JSON.parse(saved));
    }
  }

  setAppFormData(data: any): void {
    this.formData$.next(data);
    sessionStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  getAppFormData(): any {
    return this.formData$.getValue();
  }

  observeAppFormData() {
    return this.formData$.asObservable();
  }

  clear(): void {
    this.formData$.next(null);
    sessionStorage.removeItem(this.storageKey);
  }
}
