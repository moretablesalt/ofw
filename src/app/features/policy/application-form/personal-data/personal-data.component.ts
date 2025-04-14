import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzOptionComponent, NzSelectComponent } from 'ng-zorro-antd/select';
import { NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent } from 'ng-zorro-antd/form';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-personal-data',
  imports: [
    ReactiveFormsModule,
    NzInputDirective,
    NzFormLabelComponent,
    NzFormItemComponent,
    NzFormControlComponent,
    NzRowDirective,
    NzColDirective,
    NzFormDirective,
    NzSelectComponent,
    NzOptionComponent,
    NzDatePickerComponent
  ],
  templateUrl: './personal-data.component.html',
  styleUrl: './personal-data.component.scss'
})
export class PersonalDataComponent {
  @Input() personalForm!: FormGroup;
}
