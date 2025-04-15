import { Component, OnInit } from '@angular/core';
import { StepsService } from '../shared/steps/steps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent implements OnInit {
  constructor(private stepservice: StepsService, private router: Router) {}

  ngOnInit(): void {
    this.stepservice.setStep(3);
  }

  continue() {
    this.router.navigate(['/']);
  }
}
