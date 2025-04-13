import { Component, OnInit } from '@angular/core';
import { StepsService } from '../../shared/steps/steps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-form',
  imports: [],
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.css'
})
export class ApplicationFormComponent implements OnInit {
  constructor(private stepsService: StepsService, private router: Router) {}

  ngOnInit() {
    this.stepsService.setStep(1);
  }

  continue() {
    this.router.navigate(['/policy/review']);
  }
}
