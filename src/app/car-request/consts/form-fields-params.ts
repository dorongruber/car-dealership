import { genderOptions, motorOptions, seatOptions } from "./form-options"

export const NameParams = {
    "key": "name",
    "label": "Full Name",
    "placeholder": "enter full name",
    "type": "text",
    "value": "",
}

export const BirthDateParams = {
    "key": "birthDate",
    "label": "Birth Date",
    "placeholder": "enter birth date",
    "type": "date",
    "value": "",
}

export const GenderParams = {
    "key": "gender",
    "label": "Gender",
    "placeholder": "select gender",
    "type": "text",
    "value": genderOptions[0].value,
}

export const AddressParams = {
    "key": "address",
    "label": "Address",
    "placeholder": "enter address",
    "type": "text",
    "value": "",
}

export const CityParams = {
    "key": "city",
    "label": "City",
    "placeholder": "enter city",
    "type": "text",
    "value": "",
}

export const ContryParams = {
    "key": "contry",
    "label": "Contry",
    "placeholder": "enter contry",
    "type": "text",
    "value": "",
}

export const HobbiesParams = {
    "key": "hobbies",
    "label": "Hobbies",
    "placeholder": "enter hobby",
    "type": "text",
    "value": []
}

export const ColorParams = {
    "key": "favoriteColor",
    "label": "favorite color",
    "placeholder": "pick color",
    "type": "color",
    "value": "",
}

export const SeatsParams = {
    "key": "seats",
    "label": "Seats",
    "placeholder": "select quantity of seats",
    "type": "number",
    "value": seatOptions[0].value,
}

export const MotorParams = {
    "key": "motor",
    "label": "Motor Type",
    "placeholder": "select motor",
    "type": "text",
    "value": motorOptions[0].value,
}