import { Component, inject, OnInit } from '@angular/core';
import { StepsService } from '../../shared/steps/steps.service';
import { Router } from '@angular/router';
import { ApplicationFormStorageService } from '../../../services/application-form-storage.service';
import { DatePipe, JsonPipe } from '@angular/common';
import { QuoteCalculatorService } from '../../../services/quote-calculator.service';
import { QuoteDetailsStorageService } from '../../../services/quote-details-storage.service';
import {ApplicationBuilderService} from '../../../services/application-builder.service';
import {switchMap} from 'rxjs';

@Component({
  selector: 'app-review',
  imports: [
    DatePipe,
    JsonPipe
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
  paymentUrl = 'https://test.pesopay.com/b2cDemo/eng/payment/payForm.jsp';
  merchantId = '18067292';
  amount: any;
  successUrl= 'http://localhost:4200/confirmation';
  failUrl = 'http://localhost:4200/confirmation';
  cancelUrl = 'http://localhost:4200/confirmation';

  ngOnInit(): void {
    this.stepsService.setStep(3);
    this.formData = this.storage.getAppFormData();
    this.payload = this.mapToPayload()
  }

  continue() {
    this.applicationBuilderService.postData(this.payload)
      .pipe(
        switchMap(response => {
          const refCode = response.referenceCode;
          this.refCode = refCode;
          this.amount = this.quoteCalculatorService.getQuote() !== null ? this.quoteCalculatorService.getQuote()!.toString() : '';
          return this.applicationBuilderService.generateHash(refCode, this.amount);
        })
      ).subscribe(hash => {
        this.hash = hash.secretHash;
        if (hash) {
          this.createAndSubmitPaymentForm();
        } else {
          alert('Error generating hash');
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/policy/application-form']);
  }

  mapToPayload() {
    return {
      isCreatedViaAgent: false,
      startDate: this.quoteDetailsStorageService.getStartDateClean(),
      endDate: this.quoteDetailsStorageService.getEndDateClean(),
      product: {
        code: "OFW_COMPULSORY"
      },
      totalNumberOfTravelers: 1,
      travelers: [
        {
          firstName: this.formData.personal.firstName,
          middleName: this.formData.personal.middleInitial,
          lastName: this.formData.personal.lastName,
          sequenceNo: 1,
          isPrimary: true,
          dateOfBirth: this.formData.personal.birthDate,
          email: this.formData.personal.email,
          age: this.formData.personal.age.toString(),
          contactNumber: this.formData.personal.mobile,
          hasTIN: !!this.formData.personal.tin,
          taxIdentificationNumber: this.formData.personal.tin,
          streetAddress1: this.formData.personal.address,
          premium: {
            totalPremium: this.quoteCalculatorService.getQuote(),
          },
          passport: {
            lastName: this.formData.passport.lastName,
            firstName: this.formData.passport.firstName,
            middleName: this.formData.passport.middleName,
            passportNo: this.formData.passport.passportNo,
            issuedOn: this.formData.passport.issuedOn,
            issuedAt: this.formData.passport.issuedAt
          },
          work: {
            companyName: this.formData.work.companyName,
            address: this.formData.work.address,
            country: this.formData.work.country,
            industry: this.formData.work.industry,
            vesselName: this.formData.work.vesselName,
            designation: this.formData.work.designation,
            startDate: this.quoteDetailsStorageService.getStartDateClean(),
            endDate: this.quoteDetailsStorageService.getEndDateClean(),
            periodCoverage: this.quoteDetailsStorageService.getPeriod()
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
    form.method = 'POST';
    form.action = this.paymentUrl; // Payment Gateway URL
    form.style.display = 'none'; // Hide form from UI

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
      merchantId: this.merchantId,
      amount: this.amount,
      orderRef: this.refCode,
      currCode: '608',
      successUrl: this.successUrl,
      failUrl: this.failUrl,
      cancelUrl: this.cancelUrl,
      payType: 'N',
      lang: 'E',
      mpsMode: 'NIL',
      payMethod: 'ALL',
      secureHash: this.hash,
      remark: '',
      redirect: '',
      oriCountry: '',
      destCountry: '',
    };
  }
}
