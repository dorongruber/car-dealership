import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { genderOptions, motorOptions, seatOptions } from '../../consts/form-options';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { CarRequestService } from 'src/app/shared/services/mock-car-request.service';
import { FormControlService } from '../../services/form-controller.service';
import { carRequestGroup } from '../../consts/car-request-form';
import { CustomGroup } from '../../models/form-field';


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
  formStructure: CustomGroup;
  constructor( 
    private dialog: MatDialog,
    private carRequestService: CarRequestService,
    private formControlService: FormControlService
    ) {
      this.form = this.formControlService.InstantiateForm(carRequestGroup);
      this.formStructure = this.formControlService.GetMainFormStructure();  
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  onSubmit(form: FormGroup) {
    
    if(form.invalid) {
      form.markAllAsTouched();
      return;
    }
    this.carRequestService.post(form.value);    
    this.openDialog();
  }
}
