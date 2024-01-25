import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class MockCarRequestService {
    

    post(data: any) {
        const key = Date.now().toString();
        localStorage.setItem(key, JSON.stringify(data));
    }

    get() {

    }
}