import { Component, inject, OnInit } from '@angular/core';
import { StepsService } from '../../shared/steps/steps.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { PassportComponent } from './passport/passport.component';
import { WorkComponent } from './work/work.component';
import { Subject, takeUntil } from 'rxjs';
import { ApplicationFormStorageService } from '../../../services/application-form-storage.service';

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

  private stepsService = inject(StepsService);
  private router = inject(Router);
  form!: FormGroup;
  private destroy$ = new Subject<void>();
  private applicationFormStorageSerice = inject(ApplicationFormStorageService)

  constructor(private fb: FormBuilder) {
    this.buildForm();

    const appForm = sessionStorage.getItem('appForm');
    if (appForm) {
      this.form.patchValue(JSON.parse(appForm));
    }
  }

  ngOnInit() {
    this.stepsService.setStep(1);

    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value  => {
        sessionStorage.setItem('appForm', JSON.stringify(value));
      })

    const saved = this.applicationFormStorageSerice.getAppFormData();
    if (saved) {
      this.form.patchValue(saved);
    }

    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.applicationFormStorageSerice.setAppFormData(value);
      });

  }

  continue() {
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
        firstName: [''],
        middleInitial: [''],
        title: [''],
        civilStatus: [''],
        birthDate: [''],
        birthPlace: [''],
        age: [''],
        tin: [''],
        address: [''],
        mobile: [''],
        email: [''],
      }),
      passport: this.fb.group({
        lastName: [''],
        firstName: [''],
        middleName: [''],
        passportNo: [''],
        issuedOn: [''],
        issuedAt: ['']
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
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        months: [null, [Validators.required]],
      })
    });
  }
}
