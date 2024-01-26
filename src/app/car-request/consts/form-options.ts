export class SelectOption {
    value: string | number;
    constructor(value: string | number) {
        this.value = value;
    }
}

export const genderOptions: SelectOption[] = [
    new SelectOption("male"), 
    new SelectOption("female")
];

export const motorOptions: SelectOption[] = [
    new SelectOption("electric"), 
    new SelectOption("Gasoline"),
    new SelectOption("Hybrid"), 
    new SelectOption("Diesel"),
];

export const seatOptions: SelectOption[] = [
    new SelectOption(2), 
    new SelectOption(3),
    new SelectOption(4), 
    new SelectOption(5),
    new SelectOption(6), 
    new SelectOption(7),
];