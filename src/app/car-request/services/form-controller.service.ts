import { Injectable } from "@angular/core";
//import { FormField } from "../models/form-field";
import { FormBuilder, FormGroup } from "@angular/forms";
import { CustomBasicControl } from "../models/form-field";

@Injectable()
export class FormControlService {
  private fb: FormBuilder;
  constructor(formBuilder: FormBuilder) {
    this.fb = formBuilder;
  }

  InstantiateForm(formFieldsTree: CustomBasicControl) {
    const structuredFrom = formFieldsTree.ToRelatedFormFormat(this.fb) as FormGroup;
    console.log("structuredFrom ==> ", structuredFrom);
    
    return structuredFrom;
  }

  GetFlattedList(formFieldsTree: CustomBasicControl) {
    const flattedNestedChildrens = formFieldsTree.GetChildrens();
    return flattedNestedChildrens;
  }
  
}