import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectOption } from '../../consts/form-options';

@Component({
  selector: 'app-option-select',
  templateUrl: './option-select.component.html',
  styleUrls: ['./option-select.component.scss']
})
export class OptionSelectComponent {
  @Input() parentForm!: FormGroup;
  @Input() childFromName!: string;
  @Input() label!: string;
  @Input() options: SelectOption[] = [];
  @Input() isMultiSelect: boolean = true;
  @Input() type: "text" | "number" = "text";
}
