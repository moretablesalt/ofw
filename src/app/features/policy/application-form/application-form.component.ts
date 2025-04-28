import { Component, inject, OnInit } from '@angular/core';
import { StepsService } from '../../shared/steps/steps.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { PassportComponent } from './passport/passport.component';
import { WorkComponent } from './work/work.component';
import { Subject, takeUntil } from 'rxjs';
import { ApplicationFormStorageService } from '../../../services/application-form-storage.service';
import { QuoteDetailsStorageService } from '../../../services/quote-details-storage.service';
import { TimeHelperService } from '../../../services/time-helper.service';
import { ProductService } from '../../../services/product.service';
import { InsuranceEnvironmentService } from '../../../services/insurance-environment.service';

@Component({
  selector: 'app-application-form',
  imports: [
    PersonalDataComponent,
    FormsModule,
    PassportComponent,
    WorkComponent,
  ],
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.css'
})
export class ApplicationFormComponent implements OnInit {
  form!: FormGroup;
  chosenProductId = 'B';
  chosenEnv = 'sea';

  private destroy$ = new Subject<void>();

  private readonly stepsService = inject(StepsService);
  private readonly router = inject(Router);
  private readonly applicationFormStorageSerice = inject(ApplicationFormStorageService)
  private readonly quoteDetailsStorageSerice = inject(QuoteDetailsStorageService);
  private readonly timeHelperService = inject(TimeHelperService);
  private readonly productService = inject(ProductService);
  private readonly insuranceEnvironmentService = inject(InsuranceEnvironmentService);

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit() {
    this.stepsService.setStep(2);

    const saved = this.applicationFormStorageSerice.getAppFormData();
    if (saved) {
      this.form.patchValue(saved);
    }

    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.applicationFormStorageSerice.setAppFormData(value);
      });

    const quoteDetail = this.quoteDetailsStorageSerice.getQuoteDetails();

    if (quoteDetail) {
      this.form.get('work.startDate')?.setValue(quoteDetail?.startDate);
      this.form.get('work.endDate')?.setValue(quoteDetail?.endDate);
      this.form.get('work.startDate')?.disable();
      this.form.get('work.endDate')?.disable();

      const duration = this.timeHelperService.calculateMonths(quoteDetail.startDate, quoteDetail.endDate);
      this.form.get('work.months')?.setValue(duration);
      this.form.get('work.months')?.disable();
    }

    this.chosenProductId = this.productService.getProductId();
    this.chosenEnv = this.insuranceEnvironmentService.environment();

    if (this.chosenEnv === 'land') {
      if (this.form.get('work')) {
        (this.form.get('work') as FormGroup)?.removeControl('vesselName');
      }
    }
  }

  continue() {

    this.validateAllFormFields(this.form);

    if (this.form.invalid) {
      // Scroll to the first invalid field
      setTimeout(() => {
        const firstInvalid = document.querySelector(
          '.ng-invalid:not(form)'
        ) as HTMLElement;

        if (firstInvalid) {
          firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
          (firstInvalid as HTMLElement).focus?.();
        }
      }, 100);
      return;
    }

    this.router.navigate(['/policy/review']);
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

  buildForm() {
    this.form = this.fb.group({
      personal: this.fb.group({
        lastName: ['', Validators.required],
        firstName: ['', Validators.required],
        middleInitial: [''], // optional
        title: ['', Validators.required],
        civilStatus: ['', Validators.required],
        birthDate: ['', Validators.required],
        birthPlace: ['', Validators.required],
        age: ['', [Validators.required, Validators.min(1)]],
        tin: ['', Validators.required],
        address: ['', Validators.required],
        mobile: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      }),
      passport: this.fb.group({
        lastName: ['', Validators.required],
        firstName: ['', Validators.required],
        middleName: [''],
        passportNo: ['', Validators.required],
        issuedOn: ['', Validators.required],
        issuedAt: ['', Validators.required]
      }),
      agency: this.fb.group({
        agencyName: [''],
        telephonePrefix: ['+63'],
        telephoneNumber: [''],
        mobilePrefix: ['+63'],
        mobileNumber: [''],
        contactPerson: [''],
        email: ['']
      }),
      work: this.fb.group({
        companyName: ['', Validators.required],
        address: ['', Validators.required],
        country: ['', Validators.required],
        industry: ['', Validators.required],
        vesselName: ['', Validators.required],
        designation: ['', Validators.required],
        contactNo: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        months: [null, [Validators.required]],
      })
    });
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormControl) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control); // 👈 Recursively validate nested groups
      }
    });
  }

  fillWithFakeData(): void {
    const data = {
      personal: {
        lastName: 'Doe',
        firstName: 'John',
        middleInitial: 'A',
        title: 'Mr.',
        civilStatus: 'Single',
        birthDate: '1990-01-01',
        birthPlace: 'Manila',
        age: 34,
        tin: '123-456-789',
        address: '123 Fake Street, QC',
        mobile: '09171234567',
        email: 'john.doe@example.com'
      },
      passport: {
        lastName: 'Doe',
        firstName: 'John',
        middleName: 'Anthony',
        passportNo: 'P1234567',
        issuedOn: '2020-01-01',
        issuedAt: 'DFA Manila'
      },
      agency: {
        agencyName: 'Fake Agency Inc.',
        telephonePrefix: '+63',
        telephoneNumber: '287654321',
        mobilePrefix: '+63',
        mobileNumber: '9176543210',
        contactPerson: 'Jane Smith',
        email: 'agency@example.com'
      },
      work: {
        companyName: 'Oceanic Corp.',
        address: 'Port Area, Manila',
        country: 'Philippines',
        industry: 'Shipping',
        vesselName: 'MV Horizon',
        designation: 'Seafarer',
        contactNo: '0287654321',
        startDate: '2022-01-01',
        endDate: '2022-12-31',
        months: 12
      }
    };

    this.loadHardcodedData(this.form, data);
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
