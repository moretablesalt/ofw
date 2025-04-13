import { Component } from '@angular/core';
import { StepsService } from '../../shared/steps/steps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  constructor(private stepsService: StepsService, private router: Router) {
    this.stepsService.setStep(0);
  }

  continue() {
    this.router.navigate(['/policy/application-form']);
  }
}
