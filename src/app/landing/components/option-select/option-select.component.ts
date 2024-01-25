import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-option-select',
  templateUrl: './option-select.component.html',
  styleUrls: ['./option-select.component.scss']
})
export class OptionSelectComponent {
  @Input() parentForm!: FormGroup;
  @Input() childFromName!: string;
  @Input() label!: string;
  @Input() options: string[] = [];
  @Input() isMultiSelect: boolean = true;
}
