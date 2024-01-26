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
import { MockCarRequestService } from 'src/app/shared/services/mock-car-request.service';


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

  constructor(private fb: FormBuilder, 
    private dialog: MatDialog,
    private carRequestService: MockCarRequestService) {
    this.form = this.fb.group({
      name: this.fb.control<string>("", [Validators.min(fullNameMinLength), Validators.max(fullNameMaxLength), Validators.required]),
      birthDate: this.fb.control<string>("", [Validators.required]),
      gender: this.fb.control<string>(this.genders[0].value as string, [Validators.required]),
      location: this.fb.group({
        address: this.fb.control<string>("", [Validators.required, Validators.min(addressMinLength), Validators.max(addressMaxLength)]),
        city: this.fb.control<string>("", [Validators.required, Validators.min(cityMinLength), Validators.max(cityMaxLength)]),
        contry: this.fb.control<string>("", [Validators.required, Validators.min(contryMinLength), Validators.max(contryMaxLength)]),
      }),
      hobbies: this.fb.control<string[]>([], [Validators.required]),
      favoriteColor: this.fb.control<string>("", [Validators.required]),
      seats: this.fb.control<number>(this.seats[0].value as number, [Validators.required]),
      motor: this.fb.control<string>(this.motors[0].value as string, [Validators.required])
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onSubmit(form: FormGroup) {
    console.log("form.invalid ==> ", form.value);
    if(form.invalid) {
      form.markAllAsTouched();
      return;
    }
    this.carRequestService.post(form.value);
    // console.log("valid form ==> ", form.value);
    
    this.openDialog();
  }
}
