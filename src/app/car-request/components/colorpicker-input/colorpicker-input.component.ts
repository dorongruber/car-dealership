import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-colorpicker-input',
  templateUrl: './colorpicker-input.component.html',
  styleUrls: ['./colorpicker-input.component.scss']
})
export class ColorpickerInputComponent {
  @Input() parentForm!: FormGroup;
  @Input() childFromName!: string;
  @Input() label!: string;
  color: ThemePalette = 'primary';
}
