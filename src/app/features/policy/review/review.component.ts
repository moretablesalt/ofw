import { Component, OnInit } from '@angular/core';
import { StepsService } from '../../shared/steps/steps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit{

  constructor(private stepservice: StepsService, private router: Router) {}

  ngOnInit(): void {
    this.stepservice.setStep(2);
  }

  continue() {
    this.router.navigate(['/policy/confirmation']);
  }
}
