import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { genderOptions, motorOptions, seatOptions } from '../../consts/form-options';
import { 
  addressMaxLength, 
  addressMinLength, 
  cityMaxLength, 
  cityMinLength, 
  contryMaxLength, 
  contryMinLength, 
  fullNameMaxLength, 
  fullNameMinLength, 
  hobbiesMinLength, 
  hobbyMaxLength, 
  hobbyMinLength } from '../../consts/fields-restraints';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  form!: FormGroup;
  genders = genderOptions;
  motors = motorOptions;
  seats = seatOptions;
  constructor(private fb: FormBuilder,private dialog: MatDialog) {
    this.form = this.fb.group({
      fullName: this.fb.control("", [Validators.min(fullNameMinLength), Validators.max(fullNameMaxLength), Validators.required]),
      birthDate: this.fb.control(Date.now(), [Validators.required]),
      gender: this.fb.control("male", [Validators.required]),
      location: this.fb.group({
        address: this.fb.control("", [Validators.required, Validators.min(addressMinLength), Validators.max(addressMaxLength)]),
        city: this.fb.control("", [Validators.required, Validators.min(cityMinLength), Validators.max(cityMaxLength)]),
        contry: this.fb.control("", [Validators.required, Validators.min(contryMinLength), Validators.max(contryMaxLength)]),
      }),
      // hobbies: this.fb.array([
      //   this.fb.group({
      //     hobby: this.fb.control("", [Validators.required, Validators.min(hobbyMinLength), Validators.max(hobbyMaxLength)])
      //   })
      // ], [Validators.required, Validators.min(hobbiesMinLength)]),
      hobbies: this.fb.control([''], [Validators.required]),
      favoriteColor: this.fb.control("", [Validators.required]),
      seats: this.fb.control("", [Validators.required]),
      motorType: this.fb.control("", [Validators.required])
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onSubmit(form: FormGroup) {
    console.log("form.invalid ==> ", form.controls);
    this.openDialog();
    if(form.invalid) {
      Object.keys(this.form.controls).forEach(field => { 
        const control = this.form.get(field)!;            
        control.markAsTouched({ onlySelf: true });       
      });
      return;
    }
    console.log("valid form ==> ", form);
    // this.openDialog();
  }
}
