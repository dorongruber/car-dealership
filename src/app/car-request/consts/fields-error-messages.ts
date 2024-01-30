import { ErrorStateMatcher } from "@angular/material/core";
import { addressLength, cityLength, contryLength, fullNameLength, hobbiesLength } from "./fields-restraints";
import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";

const fullNameMinError = `at least ${fullNameLength.min} characters`;
const fullNameMaxError = `at most ${fullNameLength.max} characters`;
const namePatternError = "Enter 2-3 words, 3-8 letters each.";

const addressMinError = `at least ${addressLength.min} characters`;
const addressMaxError = `at most ${addressLength.max} characters`;
const addressPatternError = "Enter 1-5 digits, 1-3 words, 4-10 letters.";

const cityMinError = `at least ${cityLength.min} characters`;
const cityMaxError = `at most ${cityLength.max} characters`;
const cityPatternError = "Enter 1-2 words, 5-10 letters each.";

const contryMinError = `at least ${contryLength.min} characters`;
const contryMaxError = `at least ${contryLength.max} characters`;

const hobbyMinError = `at least ${hobbiesLength.min} characters`;
const hobbiesMaxError = `at most ${hobbiesLength.max} hobbies`;

const requiredError: string = "field is required";

const requiredErrorType: string = "required";
const minErrorType: string = "minlength";
const maxErrorType: string = "maxlength";
const patternErrorType: string = "pattern";

export const fullNameErrors: Map<string, string> = new Map<string, string>([
    [ requiredErrorType, requiredError],
    [ patternErrorType, namePatternError],
    [ minErrorType, fullNameMinError],
    [ maxErrorType, fullNameMaxError],
]);

export const addressErrors: Map<string, string> = new Map<string, string>([
    [ requiredErrorType, requiredError],
    [ patternErrorType, addressPatternError],
    [ minErrorType, addressMinError],
    [ maxErrorType, addressMaxError],
]);

export const cityErrors: Map<string, string> = new Map<string, string>([
    [ requiredErrorType, requiredError],
    [ patternErrorType, cityPatternError],
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
    [ maxErrorType, hobbiesMaxError],
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