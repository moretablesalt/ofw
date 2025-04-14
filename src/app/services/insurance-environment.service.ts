import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsuranceEnvironmentService {
  private stored = sessionStorage.getItem('insuranceEnvironment') as 'sea' | 'land' | null;
  environment = signal<'sea' | 'land'>(this.stored || 'sea');

  setEnvironment(newEnvironment: 'sea' | 'land') {
    this.environment.set(newEnvironment);
    sessionStorage.setItem('insuranceEnvironment', newEnvironment);
  }
}
