import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-colorpicker-input',
  templateUrl: './colorpicker-input.component.html',
  styleUrls: ['./colorpicker-input.component.scss']
})
export class ColorpickerInputComponent implements OnChanges {
  @Input() parentForm!: FormGroup;
  @Input() childFromName!: string;
  @Input() label!: string;
  color: ThemePalette = 'primary';

  control!: FormControl;
  ngOnChanges(changes: SimpleChanges): void {
      this.control = this.parentForm.controls[this.childFromName] as FormControl;
  }
}
