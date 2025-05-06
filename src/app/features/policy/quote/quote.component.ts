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
import { differenceInCalendarDays } from 'date-fns';
import { QuoteDetailsStorageService } from '../../../services/quote-details-storage.service';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';

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
    NzButtonComponent,
    NzTooltipDirective,
    NzIconDirective,
    NzInputNumberComponent
  ],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent implements OnInit {
  insuranceForm!: FormGroup;
  chosenProductId = 'B';
  isLoading = false;
  today = new Date();

  private destroy$ = new Subject<void>();

  private readonly productService = inject(ProductService);
  private readonly stepsService = inject(StepsService);
  private readonly quoteCalculatorService = inject(QuoteCalculatorService);
  private readonly router = inject(Router);
  private readonly quoteDetailsStorageSerice = inject(QuoteDetailsStorageService);

  // Rate for rehires
  private readonly INSURANCE_RATES = [
    { months: 3, landBased: 16, seaBased: 30 },
    { months: 5, landBased: 24, seaBased: 45 },
    { months: 6, landBased: 28, seaBased: 53 },
    { months: 12, landBased: 40, seaBased: 75 },
    { months: 18, landBased: 68, seaBased: 128 },
    { months: 24, landBased: 80, seaBased: 150 },
    { months: 30, landBased: 108, seaBased: 203 },
    { months: 36, landBased: 120, seaBased: 225 },
    { months: 48, landBased: 160, seaBased: 300 },
    { months: 60, landBased: 200, seaBased: 375 }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.restoreForm();
    this.autoSaveForm();
    this.stepsService.setStep(0);
    this.quoteCalculatorService.setQuote(null);
    this.chosenProductId = this.productService.getProductId();

    this.insuranceForm.get('period')?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.updateEndDate()); // your custom method);
  }

  private initForm(): void {
    this.insuranceForm = this.fb.group({
      environment: ['sea', Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      period: [null, Validators.required]
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

    const { environment, period } = this.insuranceForm.value;

    const premium = this.calculatePremium(environment, period);

    if (premium) {
      setTimeout(() => {
        this.quoteCalculatorService.setQuote(premium);
        this.router.navigate(['/policy/details']).finally(() => this.isLoading = false);
      }, 500);
    } else {
      this.isLoading = false;
      alert('No Premium Found');
    }
  }

  // Cannot select days before today and today
  disabledStartDate = (current: Date): boolean =>
    differenceInCalendarDays(current, this.today) < 0;

  calculatePremium(environment: string, monthsCovered: number): number | null {
    const matchedRate = this.INSURANCE_RATES.find(rate => rate.months >= monthsCovered);
    if (!matchedRate) return null;

    return environment === 'land'
      ? matchedRate.landBased
      : matchedRate.seaBased;
  }

  decrease() {
    this.period?.setValue((this.period?.value || 0) - 1);
  }

  increase() {
    this.period?.setValue((this.period?.value || 0) + 1);
  }

  get period() {
    return this.insuranceForm.get('period');
  }

  formatMonths = (value: number | string): string => {
    if (value === null || value === undefined) return '';
    const n = Number(value);
    return `${n} month${n > 1 ? 's' : ''}`;
  };

  parseMonths = (value: string): number => {
    return parseInt(value.replace(/[^\d]/g, ''), 10);
  };

  onStartDateClose(open: boolean): void {
    if (!open) { // triggered when picker closes
      this.updateEndDate()
    }
  }

  updateEndDate(): void {
    const startDate = this.insuranceForm.get('startDate')?.value;
    const period = this.period?.value;

    if (startDate && period) {
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + period * 30); // ~30 days/month
      this.insuranceForm.get('endDate')?.setValue(endDate);
    }
  }
}
