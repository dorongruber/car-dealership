import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class LocalStorageService {

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