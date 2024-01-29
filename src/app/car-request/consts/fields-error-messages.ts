import { ErrorStateMatcher } from "@angular/material/core";
import { addressMaxLength, addressMinLength, cityMaxLength, cityMinLength, contryMaxLength, contryMinLength, fullNameMaxLength, fullNameMinLength, hobbiesMinLength, hobbyMaxLength, hobbyMinLength } from "./fields-restraints";
import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";

const fullNameMinError = `at least ${fullNameMinLength} characters`;
const fullNameMaxError = `at least ${fullNameMaxLength} characters`;

const addressMinError = `at least ${addressMinLength} characters`;
const addressMaxError = `at least ${addressMaxLength} characters`;

const cityMinError = `at least ${cityMinLength} characters`;
const cityMaxError = `at least ${cityMaxLength} characters`;

const contryMinError = `at least ${contryMinLength} characters`;
const contryMaxError = `at least ${contryMaxLength} characters`;

const hobbyMinError = `at least ${hobbyMinLength} characters`;
const hobbyMaxError = `at least ${hobbyMaxLength} characters`;

const hobbiesMinError = `at least ${hobbiesMinLength} characters`;

const genredRequiredError= "select gender";
const colorRequiredError= "pick color";
const seatsRequiredError= "select number of seats";
const requiredError: string = "is required";

const requiredErrorType: string = "required";
const minErrorType: string = "min";
const maxErrorType: string = "max";

export const fullNameErrors: Map<string, string> = new Map<string, string>([
    [ requiredErrorType, requiredError],
    [ minErrorType, fullNameMinError],
    [ maxErrorType, fullNameMaxError],
]);

export const addressErrors: Map<string, string> = new Map<string, string>([
    [ requiredErrorType, requiredError],
    [ minErrorType, addressMinError],
    [ maxErrorType, addressMaxError],
]);

export const cityErrors: Map<string, string> = new Map<string, string>([
    [ requiredErrorType, requiredError],
    [ minErrorType, cityMinError],
    [ maxErrorType, cityMaxError],
]);

export const contryErrors: Map<string, string> = new Map<string, string>([
    [ requiredErrorType, requiredError],
    [ minErrorType, contryMinError],
    [ maxErrorType, contryMaxError],
]);

export const hobbyErrors: Map<string, string> = new Map<string, string>([
    [ requiredErrorType, requiredError],
    [ minErrorType, hobbyMinError],
    [ maxErrorType, hobbyMaxError],
]);

export const birthDateErrors: Map<string, string> = new Map<string, string>([
    [ requiredErrorType, requiredError],
]);

export const genderDateErrors: Map<string, string> = new Map<string, string>([
    [ requiredErrorType, requiredError],
]);

export const colorErrors: Map<string, string> = new Map<string, string>([
    [ requiredErrorType, requiredError],
]);

export const seatsErrors: Map<string, string> = new Map<string, string>([
    [ requiredErrorType, requiredError],
]);

export const motorTypeErrors: Map<string, string> = new Map<string, string>([
    [ requiredErrorType, requiredError],
]);

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }