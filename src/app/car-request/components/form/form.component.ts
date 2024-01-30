import { AfterViewInit, Component, HostListener, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { CarRequestService } from 'src/app/shared/services/mock-car-request.service';
import { FormControlService } from '../../services/form-controller.service';
import { carRequestGroup } from '../../consts/car-request-form';
import { CustomGroup } from '../../models/form-field';
import { MatStepper } from '@angular/material/stepper';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements AfterViewInit {
  form!: FormGroup;
  formStructure: CustomGroup;
  @ViewChild(MatStepper, { static: true}) stepper!:MatStepper;
  
  stepFromGroup: CustomGroup;
  currentIndex: number = 0;
  setpperOrientation!: "vertical" | "horizontal";
  labelPosition!: 'bottom' | 'end'
  isMobile: boolean;
  constructor( 
    private dialog: MatDialog,
    private carRequestService: CarRequestService,
    private formControlService: FormControlService
    ) {
      this.form = this.formControlService.InstantiateForm(carRequestGroup);
      this.formStructure = this.formControlService.GetMainFormStructure(); 
      this.stepFromGroup = this.formStructure.childrens[this.currentIndex] as CustomGroup; 
      this.isMobile = window.innerWidth > 640 ? false : true;      
      this.setStepperOrientation();
      
  }

  ngAfterViewInit(): void {      
      this.stepper.selectedIndexChange.subscribe(stepIndex => {
        this.stepFromGroup = this.formStructure.childrens[stepIndex] as CustomGroup;
        this.currentIndex = stepIndex;
      })
      
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth > 640 ? false : true;
    this.setStepperOrientation();
  }

  setStepperOrientation() {
    this.setpperOrientation = this.isMobile ? "horizontal" : "vertical";
    this.labelPosition = this.isMobile ? "bottom" : "end";
  }

  nextStep() {
    this.stepper.next();
  }

  prevStep() {
    this.stepper.previous();
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
