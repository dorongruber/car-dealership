import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MyErrorStateMatcher } from '../../consts/fields-error-messages';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnChanges {
  @Input() parentForm!: FormGroup;
  @Input() inputType: string = "text";
  @Input() controlName: string = "";
  @Input() placeholder: string = "enter name";
  @Input() label: string = "full name";

  // control!: FormControl;
  ngOnChanges(changes: SimpleChanges): void {
      // this.control = this.parentForm.controls[this.controlName] as FormControl<string>;
  }

  matcher = new MyErrorStateMatcher();

  
}
