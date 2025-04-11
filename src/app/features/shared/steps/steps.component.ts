import { Component } from '@angular/core';

@Component({
  selector: 'app-steps',
  imports: [],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.css'
})
export class StepsComponent {
  steps = ['Coverage Information', 'Application Form', 'Payment', 'Confirmation'];
  currentStep = 1;
}
