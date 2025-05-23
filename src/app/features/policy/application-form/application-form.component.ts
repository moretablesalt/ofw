import { Component, inject, OnInit } from '@angular/core';
import { StepsService } from '../../shared/steps/steps.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { PassportComponent } from './passport/passport.component';
import { WorkComponent } from './work/work.component';
import { Subject, takeUntil } from 'rxjs';
import { ApplicationFormStorageService } from '../../../services/application-form-storage.service';
import { QuoteDetailsStorageService } from '../../../services/quote-details-storage.service';
import { TimeHelperService } from '../../../services/time-helper.service';
import { ProductService } from '../../../services/product.service';
import { NzFormControlComponent, NzFormItemComponent } from 'ng-zorro-antd/form';
import { NzCheckboxComponent } from 'ng-zorro-antd/checkbox';
import { FAKE_APPLICATION_FORM_DATA } from '../../../app.constants';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { noWhitespaceValidator } from '../../../validators/no-whitespace.validator';

@Component({
  selector: 'app-application-form',
  imports: [
    PersonalDataComponent,
    FormsModule,
    PassportComponent,
    WorkComponent,
    ReactiveFormsModule,
    NzFormControlComponent,
    NzCheckboxComponent,
    NzFormItemComponent,
    NzButtonComponent,
  ],
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.css'
})
export class ApplicationFormComponent implements OnInit {
  form!: FormGroup;
  chosenProductId = 'B';
  chosenEnv = 'sea';
  isLoading = false;

  private destroy$ = new Subject<void>();

  private readonly stepsService = inject(StepsService);
  private readonly router = inject(Router);
  private readonly applicationFormStorageSerice = inject(ApplicationFormStorageService)
  private readonly quoteDetailsStorageSerice = inject(QuoteDetailsStorageService);
  private readonly timeHelperService = inject(TimeHelperService);
  private readonly productService = inject(ProductService);

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit() {
    this.stepsService.setStep(2);
    this.restoreFormValues();
    this.listenToFormChanges()
    this.setWorkDatesAndDuration();
    this.removeVesselIfLandEnv();
  }

  // helpers
  private restoreFormValues() {
    const saved = this.applicationFormStorageSerice.getAppFormData();
    if (saved) {
      this.form.patchValue(saved);
    }
  }

  private listenToFormChanges(): void {
    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
      this.applicationFormStorageSerice.setAppFormData(value);
    });
  }

  private setWorkDatesAndDuration() {
    const quote = this.quoteDetailsStorageSerice.getQuoteDetails();
    if (!quote) return;

    // start and end date
    this.setAndDisableFormControl('work.startDate', quote.startDate);
    this.setAndDisableFormControl('work.endDate', quote.endDate);

    // duration
    const duration = this.timeHelperService.calculateMonths(quote.startDate, quote.endDate);
    this.setAndDisableFormControl('work.months', duration);
  }

  private removeVesselIfLandEnv() {
    this.chosenProductId = this.productService.getProductId();

    if (this.chosenEnv === 'land') {
      if (this.form.get('work')) {
        (this.form.get('work') as FormGroup)?.removeControl('vesselName');
      }
    }
  }

  private setAndDisableFormControl(controlPath: string, value: any): void {
    const control = this.form.get(controlPath);
    if (control) {
      control.setValue(value);
      control.disable();
    }
  }

    // end helpers
  continue() {
    this.isLoading = true;

    setTimeout(() => {
      this.validateAllFormFields(this.form);
      if (this.form.invalid) {
        this.scrollToFirstInvalidField();
        this.isLoading = false;
      } else {
        this.router.navigate(['/policy/review']).finally(() => this.isLoading = false);
      }
    }, 500)
  }

  private scrollToFirstInvalidField(): void {
    setTimeout(() => {
      const firstInvalid = document.querySelector('.ng-invalid:not(form)') as HTMLElement;
      if (firstInvalid) {
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalid.focus?.();
      }
    }, 100);
  }

  get personalFormGroup(): FormGroup {
    // Simple assertion - assumes it always exists and is a FormGroup
    return this.form.get('personal') as FormGroup;
  }

  get passportFormGroup(): FormGroup {
    // Simple assertion - assumes it always exists and is a FormGroup
    return this.form.get('passport') as FormGroup;
  }

  get workFormGroup(): FormGroup {
    // Simple assertion - assumes it always exists and is a FormGroup
    return this.form.get('work') as FormGroup;
  }

  private buildForm(): void {
    this.form = this.fb.group({
      personal: this.buildPersonalGroup(),
      passport: this.buildPassportGroup(),
      agency: this.buildAgencyGroup(),
      work: this.buildWorkGroup(),
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  private buildPersonalGroup(): FormGroup {
    return this.fb.group({
      lastName: ['', [Validators.required, noWhitespaceValidator]],
      firstName: ['', [Validators.required, noWhitespaceValidator]],
      middleInitial: [''],
      title: ['', Validators.required],
      civilStatus: ['', Validators.required],
      birthDate: ['', Validators.required],
      birthPlace: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      tin: ['', [Validators.required, noWhitespaceValidator]],
      address: ['', [Validators.required, noWhitespaceValidator]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  private buildPassportGroup(): FormGroup {
    return this.fb.group({
      lastName: ['', [Validators.required, noWhitespaceValidator]],
      firstName: ['', [Validators.required, noWhitespaceValidator]],
      middleName: [''],
      passportNo: ['', [Validators.required, noWhitespaceValidator]],
      issuedOn: ['', Validators.required],
      issuedAt: ['', [Validators.required, noWhitespaceValidator]]
    });
  }

  private buildAgencyGroup(): FormGroup {
    return this.fb.group({
      agencyName: ['', [noWhitespaceValidator]],
      telephonePrefix: ['+63'],
      telephoneNumber: [''],
      mobilePrefix: ['+63'],
      mobileNumber: [''],
      contactPerson: ['', [noWhitespaceValidator]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  private buildWorkGroup(): FormGroup {
    return this.fb.group({
      companyName: ['', [Validators.required, noWhitespaceValidator]],
      address: ['', [Validators.required, noWhitespaceValidator]],
      country: ['', [Validators.required, noWhitespaceValidator]],
      industry: ['', [Validators.required, noWhitespaceValidator]],
      vesselName: ['', [Validators.required, noWhitespaceValidator]],
      designation: ['', [Validators.required, noWhitespaceValidator]],
      contactNo: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      startDate: ['', [Validators.required, noWhitespaceValidator]],
      endDate: ['', [Validators.required, noWhitespaceValidator]],
      months: [null, Validators.required]
    });
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormControl) {
        control.markAsDirty();
        control.updateValueAndValidity({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control); // 👈 Recursively validate nested groups
      }
    });
  }

  fillWithFakeData(): void {
    this.loadHardcodedData(this.form, FAKE_APPLICATION_FORM_DATA);
  }

  loadHardcodedData(form: FormGroup, data: any): void {
    Object.keys(data).forEach(groupName => {
      const group = form.get(groupName);
      if (group instanceof FormGroup) {
        const groupData = data[groupName];
        Object.keys(groupData).forEach(fieldName => {
          const control = group.get(fieldName);
          if (control && (control.value === null || control.value === '' || control.value === undefined)) {
            control.setValue(groupData[fieldName]);
          }
        });
      }
    });
  }
}
