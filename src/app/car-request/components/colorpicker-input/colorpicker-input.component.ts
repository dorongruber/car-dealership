import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomControl } from '../../models/form-field';

@Component({
  selector: 'app-colorpicker-input',
  templateUrl: './colorpicker-input.component.html',
  styleUrls: ['./colorpicker-input.component.scss']
})
export class ColorpickerInputComponent {
  @Input() control!: CustomControl;
  @Input() parent!: FormGroup;
}
