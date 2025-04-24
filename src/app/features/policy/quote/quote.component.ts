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
import { InsuranceEnvironmentService } from '../../../services/insurance-environment.service';

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
    Quote2Component
  ],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent implements OnInit {
  insuranceForm!: FormGroup;
  private readonly STORAGE_KEY_QUOTE_DETAILS = 'quoteDetails';
  private destroy$ = new Subject<void>();

  readonly productService = inject(ProductService);
  private stepsService = inject(StepsService);
  private quoteCalculatorService = inject(QuoteCalculatorService);
  private router = inject(Router);
  private insuranceEnvironmentService = inject(InsuranceEnvironmentService);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.restoreForm();
    this.autoSaveForm();
    this.stepsService.setStep(0);
    this.quoteCalculatorService.setQuote(null);
  }

  generateQuote() {
    const insuranceType = this.insuranceForm.get('insuranceType')?.value;
    this.quoteCalculatorService.setQuote(100);
    this.insuranceEnvironmentService.setEnvironment(insuranceType);
    this.router.navigate(['/policy/details']);
  }

  private initForm(): void {
    this.insuranceForm = this.fb.group({
      insuranceType: ['sea', Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required]
    });
  }

  private restoreForm() {
    const saved = sessionStorage.getItem(this.STORAGE_KEY_QUOTE_DETAILS);
    if (saved) {
      this.insuranceForm.patchValue(JSON.parse(saved));
    }
  }

  private autoSaveForm() {
    this.insuranceForm.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        sessionStorage.setItem(this.STORAGE_KEY_QUOTE_DETAILS, JSON.stringify(value));
      });
  }
}
