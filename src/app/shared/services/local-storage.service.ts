import { Injectable } from "@angular/core";
import { CarRequest } from "../models/car-request";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class LocalStorageService {

    newCarRequest: Subject<CarRequest> = new Subject<CarRequest>();

    get(key: string) {
        return localStorage.getItem(key);
    }

    add(key: string, data: any) {
        localStorage.setItem(key, data);
    }

    remove(key: string) {
        localStorage.removeItem(key);
    }
}