import { Component, inject, OnInit } from '@angular/core';
import { StepsService } from '../../shared/steps/steps.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { PassportComponent } from './passport/passport.component';
import { WorkComponent } from './work/work.component';

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

  constructor(private fb: FormBuilder) {
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
        homePhone: [''],
        fax: [''],
        officePhone: [''],
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

  ngOnInit() {
    this.stepsService.setStep(1);

    this.form.get('personal')?.valueChanges.subscribe(value => {
      console.log('Personal form changed:', value);
    });

    this.form.get('passport')?.valueChanges.subscribe(value => {
      console.log('Passport form changed:', value);
    });

    this.form.get('work')?.valueChanges.subscribe(value => {
      console.log('Work form changed:', value);
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
}
