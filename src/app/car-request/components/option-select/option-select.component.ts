import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomControl } from '../../models/form-field';

@Component({
  selector: 'app-option-select',
  templateUrl: './option-select.component.html',
  styleUrls: ['./option-select.component.scss']
})
export class OptionSelectComponent {
  @Input() control!: CustomControl;
  @Input() parent!: FormGroup;
}
