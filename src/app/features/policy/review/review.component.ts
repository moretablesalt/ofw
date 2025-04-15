import { Component, inject, OnInit } from '@angular/core';
import { StepsService } from '../../shared/steps/steps.service';
import { Router } from '@angular/router';
import { ApplicationFormStorageService } from '../../../services/application-form-storage.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-review',
  imports: [
    DatePipe
  ],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {

  private stepsService = inject(StepsService);
  private router = inject(Router);
  private storage = inject(ApplicationFormStorageService);

  formData: any;

  ngOnInit(): void {
    this.stepsService.setStep(2);
    this.formData = this.storage.getAppFormData();

  }

  continue() {
    this.router.navigate(['/confirmation']);
  }

  goBack(): void {
    this.router.navigate(['/policy/application-form']);
  }

}
