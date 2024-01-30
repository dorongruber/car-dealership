import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { CustomControl } from '../../models/form-field';
import { hobbiesLength, hobbyLength } from '../../consts/fields-restraints';


@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
})
export class HobbiesComponent {
  @Input() control!: CustomControl;
  @Input() parent!: FormGroup;
  hobbyMinMax = hobbyLength;
  hobbies: string[] = [];
  constructor(private fb: FormBuilder){}
  
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
    if(value.length < this.hobbyMinMax.min) {
      this.control.control.setErrors({"minhobbylength": true});
      return;
    }
    if(value.length > this.hobbyMinMax.max) {
      this.control.control.setErrors({"maxhobbylength": true});
      return;
    }        
    if(this.hobbies.length > hobbiesLength.max) {
      return;
    }
    // Add our keyword
    if (value) {
      this.hobbies.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }
  
}

