import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";
import { CarRequest } from "../models/car-request";
import { AbstractControl } from "@angular/forms";

@Injectable({
    providedIn: "root",
})
export class MockCarRequestService {
    
    constructor(private storageService: LocalStorageService,) {}

    post(data: AbstractControl<any, any>) {
        
        const newCarRequest = CarRequest.fromJson(data);
        this.storageService.add("new-car-request", JSON.stringify(newCarRequest));
    }

    get() {

    }
}