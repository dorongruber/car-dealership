import { Validators } from "@angular/forms";

import { 
    AddressParams, 
    BirthDateParams, 
    CityParams, 
    ColorParams, 
    ContryParams, 
    GenderParams, 
    HobbiesParams, 
    MotorParams, 
    NameParams, 
    SeatsParams } from "./form-fields-params";
import { 
    addressLength, 
    addressRegex, 
    cityLength, 
    cityRegex, 
    contryLength, 
    fullNameLength, 
    hobbiesLength,
    nameRegex} from "./fields-restraints";
import { 
    addressErrors, 
    birthDateErrors, 
    cityErrors, 
    colorErrors, 
    contryErrors, 
    fullNameErrors, 
    genderDateErrors, 
    hobbyErrors, 
    motorTypeErrors, 
    seatsErrors } from "./fields-error-messages";
import { CustomComponentRef } from "src/app/shared/models/custom-component-ref";
import { TextInputComponent } from "../components/text-input/text-input.component";
import { DatepickerInputComponent } from "../components/datepicker-input/datepicker-input.component";
import { OptionSelectComponent } from "../components/option-select/option-select.component";
import { HobbiesComponent } from "../components/hobbies/hobbies.component";
import { ColorpickerInputComponent } from "../components/colorpicker-input/colorpicker-input.component";
import { CustomControl, CustomGroup } from "../models/form-field";
import { CustomValidators } from "../models/custom-validator";

const nameControl = new CustomControl(
    {
        key: NameParams.key, 
        value: NameParams.value,
        label: NameParams.label, 
        placeholder: NameParams.placeholder, 
        position: 0, 
        hint: NameParams.hint,
        componentRef: new CustomComponentRef(TextInputComponent)
    },
    new CustomValidators(
        [...fullNameErrors.keys()], 
    
        [
            Validators.minLength(fullNameLength.min), 
            Validators.maxLength(fullNameLength.max), 
            Validators.required, 
            Validators.pattern(nameRegex),
        ],
        [...fullNameErrors.values()]
    )
);

const birthDateControl = new CustomControl(
    {
        key: BirthDateParams.key, 
        value: BirthDateParams.value,
        label: BirthDateParams.label, 
        placeholder: BirthDateParams.placeholder, 
        position: 1, 
        hint: undefined,
        componentRef: new CustomComponentRef(DatepickerInputComponent)
    },
    new CustomValidators(
        [...birthDateErrors.keys()], 
        [ Validators.required],
        [...birthDateErrors.values()]
     )
);

const genderControl = new CustomControl(
    {
        key: GenderParams.key, 
        value: GenderParams.value,
        options: GenderParams.options,
        label: GenderParams.label, 
        placeholder: GenderParams.placeholder, 
        position: 1, 
        hint: undefined,
        componentRef: new CustomComponentRef(OptionSelectComponent)
    },
    new CustomValidators(
        [...genderDateErrors.keys()], 
        [ Validators.required],
        [...genderDateErrors.values()]
     )
);

const hobbiesControl = new CustomControl(
    {
        key: HobbiesParams.key, 
        value: HobbiesParams.value,
        label: HobbiesParams.label, 
        placeholder: HobbiesParams.placeholder, 
        position: 1, 
        componentRef: new CustomComponentRef(HobbiesComponent)
    },
    new CustomValidators(
        [...hobbyErrors.keys()], 
        [ Validators.required, Validators.maxLength(hobbiesLength.max)],
        [...hobbyErrors.values()]
     )
);

const generalInfoGroup = new CustomGroup(
    {
        key: "user",
        placeholder: "Enter your personal information", 
        label: "your personal information", 
        hint: "personal information",
        position: 0, 
    },
);
generalInfoGroup.Add(nameControl);
generalInfoGroup.Add(birthDateControl);
generalInfoGroup.Add(genderControl);
generalInfoGroup.Add(hobbiesControl);

const addressControl = new CustomControl(
    {
        key: AddressParams.key, 
        value: AddressParams.value,
        options: undefined,
        label: AddressParams.label, 
        placeholder: AddressParams.placeholder, 
        position: 0, 
        hint: AddressParams.hint,
        componentRef: new CustomComponentRef(TextInputComponent)
    },
    new CustomValidators(
        [...addressErrors.keys()], 
        [ 
            Validators.required, 
            Validators.minLength(addressLength.min), 
            Validators.maxLength(addressLength.max),
            Validators.pattern(addressRegex),
        ],
        [...addressErrors.values()]
     )
);

const cityControl = new CustomControl(
    {
        key: CityParams.key, 
        value: CityParams.value,
        label: CityParams.label, 
        placeholder: CityParams.placeholder, 
        position: 0, 
        hint: CityParams.hint,
        componentRef: new CustomComponentRef(TextInputComponent)
    },
    new CustomValidators(
        [...cityErrors.keys()], 
        [ 
            Validators.required, 
            Validators.minLength(cityLength.min), 
            Validators.maxLength(cityLength.max),
            Validators.pattern(cityRegex),
        ],
        [...cityErrors.values()]
     )
);

const contryControl = new CustomControl(
    {
        key: ContryParams.key, 
        value: ContryParams.value,
        label: ContryParams.label, 
        placeholder: ContryParams.placeholder, 
        position: 0, 
        hint: undefined,
        componentRef: new CustomComponentRef(TextInputComponent)
    },
    new CustomValidators(
        [...contryErrors.keys()], 
        [ Validators.required, Validators.minLength(contryLength.min), Validators.maxLength(contryLength.max)],
        [...contryErrors.values()]
     )
);

const locationGroup = new CustomGroup(
    {
        key: "location", 
        placeholder: "Enter your location information", 
        label: "your address information ", 
        hint: "location information",
        position: 0, 
    },
);
locationGroup.Add(cityControl);
locationGroup.Add(contryControl);
locationGroup.Add(addressControl);


const colorControl = new CustomControl(
    {
        key: ColorParams.key, 
        value: ColorParams.value,
        label: ColorParams.label, 
        placeholder: ColorParams.placeholder, 
        position: 0, 
        hint: undefined,
        componentRef: new CustomComponentRef(ColorpickerInputComponent)
    },
    new CustomValidators(
        [...colorErrors.keys()], 
        [ Validators.required],
        [...colorErrors.values()]
     )
);

const seatsControl = new CustomControl(
    {
        key: SeatsParams.key, 
        value: SeatsParams.value,
        options: SeatsParams.options,
        label: SeatsParams.label, 
        placeholder: SeatsParams.placeholder, 
        position: 0, 
        hint: undefined,
        componentRef: new CustomComponentRef(OptionSelectComponent)
    },
    new CustomValidators(
        [...seatsErrors.keys()], 
        [ Validators.required],
        [...seatsErrors.values()]
     )
);

const motorControl = new CustomControl(
    {
        key: MotorParams.key, 
        value: MotorParams.value,
        options: MotorParams.options,
        label: MotorParams.label, 
        placeholder: MotorParams.placeholder, 
        position: 0, 
        hint: undefined,
        componentRef: new CustomComponentRef(OptionSelectComponent)
    },
    new CustomValidators(
        [...motorTypeErrors.keys()], 
        [ Validators.required],
        [...motorTypeErrors.values()]
     )
);

const carGroup = new CustomGroup(
    {
        key: "car", 
        placeholder: "Enter your car preferences",
        label: "your car preferences", 
        hint: "car preferences", 
        position: 0, 
    },
    
);
carGroup.Add(colorControl);
carGroup.Add(seatsControl);
carGroup.Add(motorControl);

const carRequestGroup = new CustomGroup(
    {
        key: "main group", 
        position: 0, 
    },
);
carRequestGroup.Add(generalInfoGroup);
carRequestGroup.Add(locationGroup);
carRequestGroup.Add(carGroup);

export {
    carRequestGroup,
}


