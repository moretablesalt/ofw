import { Component } from '@angular/core';
import {StepsService} from './steps.service';

@Component({
  selector: 'app-steps',
  imports: [],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.css'
})
export class StepsComponent {

  constructor(public stepsService: StepsService) {}

  steps = ['Coverage Information', 'Application Form', 'Review and Payment', 'Confirmation'];

}
