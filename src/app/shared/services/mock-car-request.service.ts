import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";
import { CarRequest } from "../models/car-request";
import { AbstractControl } from "@angular/forms";
import { mockCarRequests } from "../mock-data/mock-car-request";
import { MatSort } from "@angular/material/sort";

@Injectable({
    providedIn: "root",
})
export class MockCarRequestService {
    
    constructor(private storageService: LocalStorageService,) {}

    post(data: AbstractControl<any, any>) {
        
        const newCarRequest = CarRequest.fromJson(data);
        this.storageService.add("new-car-request", JSON.stringify(newCarRequest));
    }

    getData(startIndex: number, offset: number, sort: MatSort | undefined) {
                
        return this.getPagedData(this.getSortedData([...mockCarRequests], sort ), startIndex, offset);
    }

    getCount() {
        return mockCarRequests.length;
    }

    /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
    private getPagedData(data: CarRequest[], startIndex: number, offset: number): CarRequest[] {
        
        return data.splice(startIndex, offset);
    }

    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    private getSortedData(data: CarRequest[], sort: MatSort | undefined): CarRequest[] {
        if (!sort || !sort.active || sort.direction === '') {
            return data;
        }

        return data.sort((a, b) => {
        const isAsc = sort?.direction === 'asc';
        switch (sort?.active) {
            case 'name': return this.compare(a.name, b.name, isAsc);
            case 'birth date': return this.compare(+a.birthDay, +b.birthDay, isAsc);
            case 'amount of seats': return this.compare(+a.amoutOfSeats, +b.amoutOfSeats, isAsc);
            default: return 0;
        }
        });
    }

    /** Simple sort comparator for example ID/Name columns (for client-side sorting). */
    private compare(a: string | number, b: string | number, isAsc: boolean): number {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
}