import { FormArray, FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";

import { AddressParams, BirthDateParams, CityParams, ColorParams, ContryParams, GenderParams, HobbiesParams, MotorParams, NameParams, SeatsParams } from "./form-fields-params";
import { fullNameMaxLength, fullNameMinLength } from "./fields-restraints";
import { addressErrors, birthDateErrors, cityErrors, colorErrors, contryErrors, fullNameErrors, genderDateErrors, hobbyErrors, motorTypeErrors, seatsErrors } from "./fields-error-messages";
import { CustomComponentRef } from "src/app/shared/models/custom-component-ref";
import { TextInputComponent } from "../components/text-input/text-input.component";
import { DatepickerInputComponent } from "../components/datepicker-input/datepicker-input.component";
import { OptionSelectComponent } from "../components/option-select/option-select.component";
import { HobbiesComponent } from "../components/hobbies/hobbies.component";
import { LocationFormComponent } from "../components/location-form/location-form.component";
import { ColorpickerInputComponent } from "../components/colorpicker-input/colorpicker-input.component";
import { CustomControl, CustomGroup } from "../models/form-field";
import { CustomValidators } from "../models/custom-validator";

const nameControl = new CustomControl(NameParams["label"], NameParams["type"],
    new CustomValidators([...fullNameErrors.keys()], 
    [Validators.min(fullNameMinLength), Validators.max(fullNameMaxLength), Validators.required],
     [...fullNameErrors.values()]
     )
);

const birthDateControl = new CustomControl(BirthDateParams["label"], BirthDateParams["type"],
    new CustomValidators(
        [...birthDateErrors.keys()], 
        [ Validators.required],
        [...birthDateErrors.values()]
     )
);

const genderControl = new CustomControl(GenderParams["label"], GenderParams["type"],
    new CustomValidators(
        [...genderDateErrors.keys()], 
        [ Validators.required],
        [...genderDateErrors.values()]
     )
);

const hobbiesControl = new CustomControl(HobbiesParams["label"], HobbiesParams["type"],
    new CustomValidators(
        [...hobbyErrors.keys()], 
        [ Validators.required],
        [...hobbyErrors.values()]
     )
);

const generalInfoGroup = new CustomGroup("general info form");
generalInfoGroup.Add(nameControl);
generalInfoGroup.Add(birthDateControl);
generalInfoGroup.Add(genderControl);
generalInfoGroup.Add(hobbiesControl);

const addressControl = new CustomControl(AddressParams["label"], AddressParams["type"],
    new CustomValidators(
        [...addressErrors.keys()], 
        [ Validators.required],
        [...addressErrors.values()]
     )
);

const cityControl = new CustomControl(CityParams["label"], CityParams["type"],
    new CustomValidators(
        [...cityErrors.keys()], 
        [ Validators.required],
        [...cityErrors.values()]
     )
);

const contryControl = new CustomControl(ContryParams["label"], ContryParams["type"],
    new CustomValidators(
        [...contryErrors.keys()], 
        [ Validators.required],
        [...contryErrors.values()]
     )
);

const locationGroup = new CustomGroup("location info form");
locationGroup.Add(addressControl);
locationGroup.Add(cityControl);
locationGroup.Add(contryControl);

const colorControl = new CustomControl(ColorParams["label"], ColorParams["type"],
    new CustomValidators(
        [...colorErrors.keys()], 
        [ Validators.required],
        [...colorErrors.values()]
     )
);

const seatsControl = new CustomControl(SeatsParams["label"], SeatsParams["type"],
    new CustomValidators(
        [...seatsErrors.keys()], 
        [ Validators.required],
        [...seatsErrors.values()]
     )
);

const motorControl = new CustomControl(MotorParams["label"], MotorParams["type"],
    new CustomValidators(
        [...motorTypeErrors.keys()], 
        [ Validators.required],
        [...motorTypeErrors.values()]
     )
);

const carGroup = new CustomGroup("car info form");
carGroup.Add(colorControl);
carGroup.Add(seatsControl);
carGroup.Add(motorControl);

const carRequestGroup = new CustomGroup("main group");
carRequestGroup.Add(generalInfoGroup);
carRequestGroup.Add(locationGroup);
carRequestGroup.Add(carGroup);

export {
    carRequestGroup,
}


