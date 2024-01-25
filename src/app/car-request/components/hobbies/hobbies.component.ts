import { Component, Input, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../consts/fields-error-messages';
import {MatChipInputEvent} from '@angular/material/chips';
import {LiveAnnouncer} from '@angular/cdk/a11y';


@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
})
export class HobbiesComponent {
  @Input() parentForm!: FormGroup;
  @Input() childFromName!: string;
  matcher = new MyErrorStateMatcher();

  hobbies: string[] = [];
  constructor(private fb: FormBuilder){}

  // get hobbies() {
  //   return this.parentForm.controls[this.childFromName] as FormArray;
  // }

  // getHobby(index: number) {
  //   return this.hobbies.controls[index] as FormGroup;
  // }

  // addHobby(index: number) {
  //   this.hobbies.insert(index +1,this.fb.group({
  //     hobby: this.fb.control("", [Validators.required, Validators.min(3), Validators.max(20)])
  //   }));
  // }

  // removeHobby(index: number) {
  //   this.hobbies.removeAt(index);
  // }
  announcer = inject(LiveAnnouncer);

  removeKeyword(hobby: string) {
    const index = this.hobbies.indexOf(hobby);
    if (index >= 0) {
      this.hobbies.splice(index, 1);

      this.announcer.announce(`removed ${hobby}`);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      this.hobbies.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }
}

