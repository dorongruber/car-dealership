export class CarRequest {
    fullName: string;
    gender: string;
    birthDay: Date;
    hobbies: string[];
    location: Location;
    favoriteColor: string;
    amoutOfSeats: number;
    motors: string[];

    constructor(
        fullName: string,
        gender: string,
        birthDay: Date,
        hobbies: string[],
        location: Location,
        favoriteColor: string,
        amoutOfSeats: number,
        motors: string[],) 
        {
            this.fullName = fullName;
            this.gender = gender;
            this.birthDay = birthDay;
            this.hobbies = hobbies;
            this.location = location;
            this.favoriteColor = favoriteColor;
            this.amoutOfSeats = amoutOfSeats;
            this.motors = motors;
        }
    

    public static fromJson(json: {[key: string]: any}) {
        return new CarRequest(
            json["fullName"],
            json["gender"],
            json["birthDate"],
            json["hobbies"],
            Location.fromJson(json["location"]),
            json["favoriteColor"],
            json["seats"],
            json["motorType"],
        )
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
        
    public static fromJson(json: {[key: string]: any}) {
        return new Location(
            json["address"],
            json["city"],
            json["contry"],
        );
    }   
}