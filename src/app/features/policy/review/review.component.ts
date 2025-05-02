import { Component, inject, OnInit } from '@angular/core';
import { StepsService } from '../../shared/steps/steps.service';
import { Router } from '@angular/router';
import { ApplicationFormStorageService } from '../../../services/application-form-storage.service';
import { DatePipe } from '@angular/common';
import { QuoteCalculatorService } from '../../../services/quote-calculator.service';
import { QuoteDetailsStorageService } from '../../../services/quote-details-storage.service';
import { ApplicationBuilderService } from '../../../services/application-builder.service';
import { catchError, switchMap, throwError } from 'rxjs';
import { PAYMENT_CONFIG } from '../../../app.constants';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-review',
  imports: [
    DatePipe,
    NzButtonComponent,
  ],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {

  private stepsService = inject(StepsService);
  private router = inject(Router);
  private storage = inject(ApplicationFormStorageService);
  private quoteCalculatorService = inject(QuoteCalculatorService);
  private quoteDetailsStorageService = inject(QuoteDetailsStorageService);
  private applicationBuilderService = inject(ApplicationBuilderService);

  formData!: any;
  payload: any;
  refCode: any;
  hash: any;

  // pesopay form
  amount: any;
  isLoading = false;

  ngOnInit(): void {
    this.stepsService.setStep(3);
    this.formData = this.storage.getAppFormData();
    this.payload = this.mapToPayload()
  }

  continue() {
    this.isLoading = true;

    setTimeout(() => {
      this.applicationBuilderService.postData(this.payload)
        .pipe(
          switchMap(response => {
            const refCode = response.referenceCode;
            this.refCode = refCode;
            this.amount = this.quoteCalculatorService.getQuote() !== null ? this.quoteCalculatorService.getQuote()!.toString() : '';
            return this.applicationBuilderService.generateHash(refCode, this.amount);
          }),
          catchError(error => {
            console.error('PostData error:', error);
            this.isLoading = false;
            alert('Failed to submit application. Please try again.' + JSON.stringify(error));
            return throwError(() => error)
          })
        ).subscribe(hash => {
        if (hash) {
          this.hash = hash.secretHash;
          this.createAndSubmitPaymentForm();
        } else {
          alert('Error generating hash');
        }
      });
    },500)

  }

  goBack(): void {
    this.router.navigate(['/policy/application-form']);
  }

  mapToPayload() {

    const personal = this.formData.personal;
    const work = this.formData.work;
    const passport = this.formData.passport;

    const startDate = this.quoteDetailsStorageService.getStartDateClean();
    const endDate = this.quoteDetailsStorageService.getEndDateClean();
    const period = this.quoteDetailsStorageService.getPeriod();

    return {
      isCreatedViaAgent: false,
      startDate: startDate,
      endDate: endDate,
      product: {
        code: "OFW_EXPANDED_COMPULSORY"
      },
      totalNumberOfTravelers: 1,
      travelers: [
        {
          firstName: personal.firstName,
          middleName: personal.middleInitial,
          lastName: personal.lastName,
          sequenceNo: 1,
          isPrimary: true,
          dateOfBirth: personal.birthDate,
          email: personal.email,
          age: personal.age.toString(),
          contactNumber: personal.mobile,
          hasTIN: !!personal.tin,
          taxIdentificationNumber: personal.tin,
          streetAddress1: personal.address,
          premium: {
            totalPremium: this.quoteCalculatorService.getQuote(),
          },
          passport: {
            lastName: passport.lastName,
            firstName: passport.firstName,
            middleName: passport.middleName,
            passportNo: passport.passportNo,
            issuedOn: passport.issuedOn,
            issuedAt: passport.issuedAt,
          },
          work: {
            companyName: work.companyName,
            address: work.address,
            country: work.country,
            industry: work.industry,
            vesselName: work.vesselName,
            designation: work.designation,
            startDate: startDate,
            endDate: endDate,
            periodCoverage: period,
          },
          totalSumInsured: 198000
        }
      ],
      paymentType: "PAYMENT_GATEWAY",
      agency: this.formData.agency.agencyName
        ? {
          id: 1,
          name: this.formData.agency.agencyName
        }
        : undefined
    };
  }

  private createAndSubmitPaymentForm(): void {
    const form = document.createElement('form');
    form.method = PAYMENT_CONFIG.method;
    form.action = PAYMENT_CONFIG.url; // Payment Gateway URL
    form.style.display = PAYMENT_CONFIG.styleDisplay; // Hide form from UI

    // 🔹 Create and append hidden input fields
    Object.entries(this.getPaymentFormData()).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
  }

  private getPaymentFormData(): { [key: string]: string } {
    return {
      // dynamic
      secureHash: this.hash,
      amount: this.amount,
      orderRef: this.refCode,

      // config
      merchantId: PAYMENT_CONFIG.merchantId,
      currCode: PAYMENT_CONFIG.currCode,
      successUrl: PAYMENT_CONFIG.successUrl,
      failUrl: PAYMENT_CONFIG.failUrl,
      cancelUrl: PAYMENT_CONFIG.cancelUrl,
      payType: PAYMENT_CONFIG.payType,
      lang: PAYMENT_CONFIG.lang,
      mpsMode: PAYMENT_CONFIG.mpsMode,
      payMethod: PAYMENT_CONFIG.payMethod,
      remark: '',
      redirect: '',
      oriCountry: '',
      destCountry: '',
    };
  }
}
