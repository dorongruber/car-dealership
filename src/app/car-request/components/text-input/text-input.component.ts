import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MyErrorStateMatcher } from '../../consts/fields-error-messages';
import { CustomControl } from '../../models/form-field';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {
  @Input() control!: CustomControl;
  @Input() parent!: FormGroup;

  matcher = new MyErrorStateMatcher();

  
}
