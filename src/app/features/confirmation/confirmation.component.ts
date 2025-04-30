import { Component, inject, OnInit } from '@angular/core';
import { StepsService } from '../shared/steps/steps.service';
import {ActivatedRoute, Router} from '@angular/router';
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

  status: string | null | undefined;

  message: string | undefined;
  subMessage: string | undefined;

  private stepsService = inject(StepsService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private applicationFormStorageService = inject(ApplicationFormStorageService);

  ngOnInit(): void {
    this.stepsService.setStep(4);
    this.status = this.route.snapshot.paramMap.get('status');

    switch (this.status) {
      case 'success':
        this.message = 'Your payment was successful! 🎉';
        this.subMessage = 'Thank you for your purchase. A confirmation email will be sent shortly.';
        break;
      case 'fail':
        this.message = 'Payment failed.';
        this.subMessage = 'There was a problem processing your payment. Please try again or contact support.';
        break;
      case 'cancel':
        this.message = 'Payment was canceled.';
        this.subMessage = 'You have canceled the payment process. No charges were made.';
        break;
      default:
        this.message = 'Unknown payment status.';
        this.subMessage = 'Please go back to the homepage or contact customer support if needed.';
        break;
    }
  }

  backToHome() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  backToPayment() {
    this.router.navigate(['/policy/review']);
  }
}
