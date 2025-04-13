import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  private _step = signal(0);
  get step() {
   return this._step;
  }

  setStep(step: number) {
    this._step.set(step);
  }
}
