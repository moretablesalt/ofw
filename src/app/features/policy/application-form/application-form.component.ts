import {Component, inject, OnInit} from '@angular/core';
import { StepsService } from '../../shared/steps/steps.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalDataComponent } from './personal-data/personal-data.component';

@Component({
  selector: 'app-application-form',
  imports: [
    PersonalDataComponent
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
      // Other sub-groups will go here later
    });
  }

  ngOnInit() {
    this.stepsService.setStep(1);
  }

  continue() {
    this.router.navigate(['/policy/review']);
  }

  get personalFormGroup(): FormGroup {
    // Simple assertion - assumes it always exists and is a FormGroup
    return this.form.get('personal') as FormGroup;
  }
}
