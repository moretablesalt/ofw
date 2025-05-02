import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent } from 'ng-zorro-antd/form';
import { NzRadioComponent, NzRadioGroupComponent } from 'ng-zorro-antd/radio';
import { StepsService } from '../../shared/steps/steps.service';
import { QuoteCalculatorService } from '../../../services/quote-calculator.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Quote2Component } from '../quote2/quote2.component';
import { ProductService } from '../../../services/product.service';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { addYears, differenceInCalendarDays, isAfter, isBefore } from 'date-fns';
import { QuoteDetailsStorageService } from '../../../services/quote-details-storage.service';
import { TimeHelperService } from '../../../services/time-helper.service';

@Component({
  selector: 'app-quote',
  imports: [
    FormsModule,
    NzColDirective,
    NzDatePickerComponent,
    NzFormControlComponent,
    NzFormItemComponent,
    NzFormLabelComponent,
    NzRowDirective,
    ReactiveFormsModule,
    NzFormDirective,
    NzRadioGroupComponent,
    NzRadioComponent,
    Quote2Component,
    NzButtonComponent
  ],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent implements OnInit {
  insuranceForm!: FormGroup;
  monthsCovered = 0;
  chosenProductId = 'B';
  isLoading = false;
  today = new Date();

  private destroy$ = new Subject<void>();

  private readonly productService = inject(ProductService);
  private readonly stepsService = inject(StepsService);
  private readonly quoteCalculatorService = inject(QuoteCalculatorService);
  private readonly router = inject(Router);
  private readonly quoteDetailsStorageSerice = inject(QuoteDetailsStorageService);
  private readonly timeHelperService = inject(TimeHelperService);

  private readonly INSURANCE_RATES = [
    { months: 3, landBased: 16, seaBased: 30 },
    { months: 5, landBased: 24, seaBased: 45 },
    { months: 6, landBased: 28, seaBased: 53 },
    { months: 12, landBased: 40, seaBased: 75 },
    { months: 18, landBased: 68, seaBased: 128 },
    { months: 24, landBased: 80, seaBased: 150 },
    { months: 30, landBased: 108, seaBased: 203 },
    { months: 36, landBased: 120, seaBased: 225 }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.restoreForm();
    this.autoSaveForm();
    this.stepsService.setStep(0);
    this.quoteCalculatorService.setQuote(null);
    this.chosenProductId = this.productService.getProductId();
  }

  private initForm(): void {
    this.insuranceForm = this.fb.group({
      environment: ['sea', Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required]
    });
  }

  private restoreForm() {
    const saved = this.quoteDetailsStorageSerice.getQuoteDetails();
    if (saved) {
      this.insuranceForm.patchValue(saved);
    }
  }

  private autoSaveForm() {
    this.insuranceForm.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.quoteDetailsStorageSerice.setQuoteDetails(value);
      });
  }

  generateQuote() {
    if (this.insuranceForm.invalid) {
      this.insuranceForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;

    const { insuranceType, startDate, endDate } = this.insuranceForm.value;
    this.monthsCovered = this.timeHelperService.calculateMonths(startDate, endDate);

    const premium = this.calculatePremium(insuranceType, this.monthsCovered);

    if (premium) {
      setTimeout(() => {
        this.quoteCalculatorService.setQuote(premium);
        this.router.navigate(['/policy/details']).finally(() => this.isLoading = false);
      }, 500);
      this.insuranceForm.enable();
    } else {
      this.isLoading = false;
    }
  }

  // Cannot select days before today and today
  disabledStartDate = (current: Date): boolean =>
    differenceInCalendarDays(current, this.today) < 0;

  // Cannot select earlier than start date and more than 3 years
  disabledEndDate = (current: Date): boolean => {
    const startDate = this.insuranceForm?.value?.startDate;
    if (!startDate) {
      return true; // Disable all dates if no startDate selected yet
    }

    const start = new Date(startDate);
    const maxDate = addYears(start, 3);

    // set at end of day
    maxDate.setHours(23, 59, 59, 999);

    return isBefore(current, start) || isAfter(current, maxDate);
  };

  calculatePremium(insuranceType: string, monthsCovered: number): number | null {
    const matchedRate = this.INSURANCE_RATES.find(rate => rate.months >= monthsCovered);
    if (!matchedRate) return null;

    return insuranceType === 'land'
      ? matchedRate.landBased
      : matchedRate.seaBased;
  }
}
