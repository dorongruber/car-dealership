interface Adapter {
    
}

export class CarRequest {
    fullName: string;
    email: string;
    birthDay: Date;
    hobbies: Hobby[];
    favoriteColor: string;
    amoutOfSeats: string;
    motor: Motor;

    constructor(fullName: string,
        email: string,
        birthDay: Date,
        hobbies: Hobby[],
        favoriteColor: string,
        amoutOfSeats: string,
        motor: Motor,) 
        {
            this.fullName = fullName;
            this.email = email;
            this.birthDay = birthDay;
            this.hobbies = hobbies;
            this.favoriteColor = favoriteColor;
            this.amoutOfSeats = amoutOfSeats;
            this.motor = motor;
        }
    

    
}

export class Location {
    address: string;
    city: string;
    contry: string;

    constructor(address: string,
        city: string,
        contry: string,) 
        {
            this.address = address;
            this.city = city;
            this.contry = contry;
        }

}

export class Hobby {
    description: string;

    constructor(description: string,) {
        this.description = description;
    }
}

export class Motor {
    type: string;

    constructor(type: string) {
        this.type = type;
    }
}