import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { CustomBasicControl } from "../models/form-field";
import { carRequestGroup } from "../consts/car-request-form";

@Injectable()
export class FormControlService {
  private fb: FormBuilder;
  constructor(formBuilder: FormBuilder) {
    this.fb = formBuilder;
  }

  InstantiateForm(formFieldsTree: CustomBasicControl) {
    return formFieldsTree.ToRelatedFormFormat(this.fb) as FormGroup;
  }

  GetMainFormStructure() {
    return carRequestGroup;
  }

  GetFlattedList(formFieldsTree: CustomBasicControl) {
    const flattedNestedChildrens = formFieldsTree.GetChildrens();
    return flattedNestedChildrens;
  }
  
}