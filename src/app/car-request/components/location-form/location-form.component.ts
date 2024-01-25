import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss']
})
export class LocationFormComponent implements OnChanges {
  @Input() parentForm!: FormGroup;
  @Input() childFromName!: string;
  @Input() inputType: string = "text";
  @Input() controlName: string = "fullName";
  @Input() placeholder: string = "enter name";
  @Input() label: string = "full name";

  childFrom!: FormGroup;

  ngOnChanges(changes: SimpleChanges): void {
      this.childFrom = this.parentForm.get(this.childFromName) as FormGroup;
  }
}
