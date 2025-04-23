import { Component, inject } from '@angular/core';
import { StepsService } from './steps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-steps',
  imports: [],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.css'
})
export class StepsComponent {

  private router = inject(Router)

  constructor(public stepsService: StepsService) {}

  steps = ['Quote', 'Details', 'Application Form', 'Review and Payment', 'Confirmation'];

    goToStep(i: number) {
      let route = '';
      if (i === 0) {
        route = '/policy/quote';
      } else if (i === 1) {
        route = '/policy/details';
      } else if (i === 2) {
        route = '/policy/application-form';
      } else if (i === 3) {
        route = '/policy/review';
      }
      this.router.navigate([route]);
    }
}
