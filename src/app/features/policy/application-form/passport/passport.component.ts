import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent } from 'ng-zorro-antd/form';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import {addYears, differenceInCalendarDays, isAfter, isBefore} from 'date-fns';

@Component({
  selector: 'app-passport',
  imports: [
    ReactiveFormsModule,
    NzRowDirective,
    NzColDirective,
    NzFormLabelComponent,
    NzInputDirective,
    NzDatePickerComponent,
    NzFormDirective,
    NzFormControlComponent,
    NzFormItemComponent
  ],
  templateUrl: './passport.component.html',
  styleUrl: './passport.component.css'
})
export class PassportComponent {
  @Input() passportForm!: FormGroup;
  today = new Date();

  disabledStartDate = (current: Date): boolean => {
    const start = new Date();
    // set at end of day
    start.setHours(23, 59, 59, 999);
    return isAfter(current, start);
  };
}
