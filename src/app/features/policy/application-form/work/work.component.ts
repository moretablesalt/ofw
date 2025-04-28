import {Component, inject, Input, OnInit, ViewChild} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent } from 'ng-zorro-antd/form';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzOptionComponent, NzSelectComponent } from 'ng-zorro-antd/select';
import { NgForOf } from '@angular/common';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { InsuranceEnvironmentService } from '../../../../services/insurance-environment.service';
import { addYears, differenceInCalendarDays, isAfter, isBefore } from 'date-fns';

@Component({
  selector: 'app-work',
  imports: [
    ReactiveFormsModule,
    NzFormDirective,
    NzFormItemComponent,
    NzFormLabelComponent,
    NzFormControlComponent,
    NzInputDirective,
    NzRowDirective,
    NzColDirective,
    NzSelectComponent,
    NzOptionComponent,
    NgForOf,
    NzDatePickerComponent
  ],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent implements OnInit {
  @Input() workForm!: FormGroup;
  @ViewChild('endDatePicker') endDatePicker!: NzDatePickerComponent;
  countries = ['Philippines', 'Japan', 'USA'];
  chosenEnv: 'sea' | 'land' | null = null;
  today = new Date();

  private readonly insuranceEnvironmentService = inject(InsuranceEnvironmentService);

  ngOnInit() {
    this.chosenEnv = this.insuranceEnvironmentService.environment();
  }

  // Cannot select days before today and today
  disabledStartDate = (current: Date): boolean =>
    differenceInCalendarDays(current, this.today) < 0;

  // Cannot select earlier than start date and more than 3 years
  disabledEndDate = (current: Date): boolean => {
    const startDate = this.workForm?.value?.startDate;
    if (!startDate) {
      return true; // Disable all dates if no startDate selected yet
    }

    const start = new Date(startDate);
    const maxDate = addYears(start, 3);

    return isBefore(current, start) || isAfter(current, maxDate);
  };

  handleStartOpenChange(open: boolean): void {
    if (!open && this.endDatePicker) {
      this.endDatePicker.open();
    }
  }

  handleEndOpenChange(open: boolean): void {
    console.log('End Picker Open:', open);
  }
}
