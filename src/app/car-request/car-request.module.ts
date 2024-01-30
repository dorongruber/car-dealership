import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainComponent } from './routes/main/main.component';
import { FormComponent } from './components/form/form.component';
import { CarRequesRoutingModule } from './car-request-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TextInputComponent } from './components/text-input/text-input.component';
import { DatepickerInputComponent } from './components/datepicker-input/datepicker-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule, NativeDateAdapter} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';

import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { InrangeSelectComponent } from './components/inrange-select/inrange-select.component';
import { OptionSelectComponent } from './components/option-select/option-select.component';
import { ColorpickerInputComponent } from './components/colorpicker-input/colorpicker-input.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ColorPickerDirective } from './directives/color-picker.directive';
import { FormControlService } from './services/form-controller.service';
import { DynamicInputLoaderComponent } from './components/dynamic-input-loader/dynamic-input-loader.component';

@NgModule({
  declarations: [
    MainComponent,
    FormComponent,
    TextInputComponent,
    DatepickerInputComponent,
    HobbiesComponent,
    InrangeSelectComponent,
    OptionSelectComponent,
    ColorpickerInputComponent,
    DialogComponent,
    DynamicInputLoaderComponent
  ],
  imports: [
    CommonModule,
    CarRequesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatDividerModule,
    MatSelectModule,
    MatChipsModule,
    ColorPickerDirective
  ],
  providers: [
    NativeDateAdapter,
    FormControlService,
  ]
})
export class CarRequestModule { }
