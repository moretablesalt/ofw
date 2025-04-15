import { Component, Input, ViewChild } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent } from 'ng-zorro-antd/form';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzOptionComponent, NzSelectComponent } from 'ng-zorro-antd/select';
import { NgForOf } from '@angular/common';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';

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
export class WorkComponent {
  @Input() workForm!: FormGroup;
  @ViewChild('endDatePicker') endDatePicker!: NzDatePickerComponent;
  countries = ['Philippines', 'Japan', 'USA'];

  get startValue(): Date | null {
    return this.workForm.get('startDate')?.value;
  }

  get endValue(): Date | null {
    return this.workForm.get('endDate')?.value;
  }

  disabledStartDate = (start: Date): boolean => {
    const end = this.endValue;
    return !!end && !!start && start.getTime() > end.getTime();
  };

  disabledEndDate = (end: Date): boolean => {
    const start = this.startValue;
    return !!start && !!end && end.getTime() <= start.getTime();
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
