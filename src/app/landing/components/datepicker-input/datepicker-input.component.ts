import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datepicker-input',
  templateUrl: './datepicker-input.component.html',
  styleUrls: ['./datepicker-input.component.scss']
})
export class DatepickerInputComponent {
  @Input() parentForm!: FormGroup;
  @Input() childFromName!: string;
}
