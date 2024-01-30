import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn } from "@angular/forms";
import { CustomValidators } from "./custom-validator";
import { CustomComponentRef } from "src/app/shared/models/custom-component-ref";
import { SelectOption } from "../consts/form-options";

export interface ControlBasicData {
    key: string;
    value?: string | string[] | number;
    options?: SelectOption[];
    label?: string;
    placeholder?: string;
    position: number;
    hint?: string;
    componentRef?: CustomComponentRef;
}


export abstract class CustomBasicControl {
  control!: AbstractControl<any,any>;
  validators: CustomValidators | undefined;
  data: ControlBasicData;
  parent?: CustomBasicControl | undefined;
  constructor(data: ControlBasicData, validators?: CustomValidators)
    {
      this.data = data;
      this.validators = validators;
    }

  abstract ToRelatedFormFormat(fb: FormBuilder): AbstractControl<any,any>;

  abstract AsChildrens(): boolean;

  abstract GetChildrens(): CustomBasicControl[];

  Add(field: CustomBasicControl): void {};

  Remove(field: CustomBasicControl): void{};

}

export class CustomControl extends CustomBasicControl {

  constructor(
    data: ControlBasicData, 
    validators?: CustomValidators,
     ) {
      super(data , validators);
  }

  ToRelatedFormFormat(fb: FormBuilder): AbstractControl<any, any> {
    this.control = fb.control(this.data["value"], this.validators?.validatorFn);
    return this.control;
  }

  GetChildrens(): CustomBasicControl[] {
    return [this];
  };

  AsChildrens(): boolean {
      return false;
  }
}

export class CustomGroup extends CustomBasicControl {
  childrens: CustomBasicControl[];
  constructor(data: ControlBasicData, {validators = undefined, childrens = []} :
    {validators?: CustomValidators, childrens?: CustomBasicControl[]}
    = {}) {
      super(data, validators);
    this.childrens = childrens;
  }
  ToRelatedFormFormat(fb: FormBuilder): AbstractControl<any, any> {
    const formControls: {[key: string]: AbstractControl} = {};
    this.childrens.forEach(child => {
        formControls[child.data["key"]!] = child.ToRelatedFormFormat(fb);

    });
    this.control = fb.group(formControls, {validators: this.validators?.validatorFn},);
    return this.control;
  }

  AsChildrens(): boolean {
    return this.childrens.length > 0;
  }

  GetChildrens(): CustomBasicControl[] {
    let flatted: CustomBasicControl[] = [];
    this.childrens.forEach(child => {
      flatted = flatted.concat(child.GetChildrens().flat());
    })
    return flatted;
  }

  override Add(control: CustomBasicControl): void {
    control.parent = this;
    this.childrens.push(control);
  }

  override Remove(control: CustomBasicControl): void {
     const index = this.childrens.findIndex(c => c == control);
     this.childrens.splice(index,1);
  }

}


export class CustomArray extends  CustomGroup {
  constructor(data: ControlBasicData, {validators = undefined, childrens = []} :
    {validators?: CustomValidators, childrens?: CustomBasicControl[]}
    = {}) {
      super(data, {validators: validators, childrens: childrens});
  }

  override ToRelatedFormFormat(fb: FormBuilder): AbstractControl<any, any> {
    const formControls: AbstractControl[] = [];
    this.childrens.forEach(child => {
        formControls.push(child.ToRelatedFormFormat(fb));

    });
    this.control = fb.array(formControls, {validators: this.validators?.validatorFn},);
    return this.control;
  }

  override Add(control: CustomBasicControl): void {
    control.parent = this;
    this.childrens.push(control);
  }

  override Remove(control: CustomBasicControl): void {
    const index = this.childrens.findIndex(c => c == control);
    this.childrens.splice(index,1);
 }
}