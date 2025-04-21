import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent } from 'ng-zorro-antd/form';
import { NzRadioComponent, NzRadioGroupComponent } from 'ng-zorro-antd/radio';
import { StepsService } from '../../shared/steps/steps.service';

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
    NzRadioComponent
  ],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent {
  insuranceForm!: FormGroup;

  private stepsService = inject(StepsService);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.insuranceForm = this.fb.group({
      insuranceType: ['sea', Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required]
    });

    this.stepsService.setStep(0);
  }

  sayHello() {
    alert('Get quote');
  }
}
