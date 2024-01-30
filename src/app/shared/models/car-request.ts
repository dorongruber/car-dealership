export class CarRequest {
    name: string;
    gender: string;
    birthDay: Date;
    hobbies: string[];
    location: Location;
    favoriteColor: string;
    amoutOfSeats: number;
    motor: string;

    constructor(
        name: string,
        gender: string,
        birthDay: Date,
        hobbies: string[],
        location: Location,
        favoriteColor: string,
        amoutOfSeats: number,
        motor: string,) 
        {
            this.name = name;
            this.gender = gender;
            this.birthDay = birthDay;
            this.hobbies = hobbies;
            this.location = location;
            this.favoriteColor = favoriteColor;
            this.amoutOfSeats = amoutOfSeats;
            this.motor = motor;
        }
    
    public static fromFormJson(json: {[key: string]: any}) {
        return new CarRequest(
            json["user"]["name"],
            json["user"]["gender"],
            json["user"]["birthDate"],
            json["user"]["hobbies"],
            Location.fromJson(json["location"]),
            json["car"]["favoriteColor"],
            json["car"]["seats"],
            json["car"]["motor"],
        );
    }

    public static fromJson(json: {[key: string]: any}) {
        return new CarRequest(
            json["name"],
            json["gender"],
            json["birthDate"],
            json["hobbies"],
            Location.fromJson(json["location"]),
            json["favoriteColor"],
            json["seats"],
            json["motor"],
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