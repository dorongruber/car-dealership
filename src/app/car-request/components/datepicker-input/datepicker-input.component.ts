import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomControl } from '../../models/form-field';

@Component({
  selector: 'app-datepicker-input',
  templateUrl: './datepicker-input.component.html',
  styleUrls: ['./datepicker-input.component.scss']
})
export class DatepickerInputComponent {
  @Input() control!: CustomControl;
  @Input() parent!: FormGroup;
}
