import { Component, inject, OnInit } from '@angular/core';
import { StepsService } from '../shared/steps/steps.service';
import { Router } from '@angular/router';
import { StepsComponent } from '../shared/steps/steps.component';
import { ApplicationFormStorageService } from '../../services/application-form-storage.service';

@Component({
  selector: 'app-confirmation',
  imports: [
    StepsComponent
  ],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent implements OnInit {

  private stepsService = inject(StepsService);
  private router = inject(Router);
  private applicationFormStorageService = inject(ApplicationFormStorageService);

  ngOnInit(): void {
    this.stepsService.setStep(4);
  }

  backToHome() {
    this.applicationFormStorageService.clear();
    this.router.navigate(['/']);
  }
}
