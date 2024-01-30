import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";
import { CarRequest } from "../models/car-request";
import { AbstractControl } from "@angular/forms";
import { mockCarRequests } from "../mock-data/mock-car-request";
import { MatSort } from "@angular/material/sort";
import { BehaviorSubject, Subject, concatMap, delay, map } from "rxjs";
import { motorOptions } from "src/app/car-request/consts/form-options";
import { BarChartData, PieChartData } from "src/app/dashboard/models/bar-chart-data";

interface ageGroup {
    label: string;
    min: number;
    max: number;
}

export interface mostpickedColor {
    color: string;
    quantity: number;
}

const ageGroups: ageGroup[] = [
    {label: "18-25", min: 18, max: 25},
    {label: "26-35", min: 26, max: 35},
    {label: "36-45", min: 36, max: 45},
    {label: "46-55", min: 46, max: 55},
    {label: "56-65", min: 56, max: 65},
    {label: "66-75", min: 66, max: 75},
];



@Injectable({
    providedIn: "root",
})
export class CarRequestService {

    carRequests: BehaviorSubject<CarRequest[]> = new BehaviorSubject<CarRequest[]>(mockCarRequests);
    
    constructor(private storageService: LocalStorageService,) {}

    initStorage() {
        this.storageService.add("car-request-repo", JSON.stringify(mockCarRequests));
    }

    post(data: AbstractControl<any, any>) {
        
        const newCarRequest = CarRequest.fromFormJson(data);
        const stringifyRequests = this.storageService.get("car-request-repo")!;
        
        const parsedData = JSON.parse(stringifyRequests);
        parsedData.push(newCarRequest);
        this.storageService.remove("car-request-repo");
        this.storageService.add("car-request-repo", JSON.stringify(parsedData));
        this.carRequests.next(this.carRequests.value.concat(newCarRequest));
        
    }

    get() {
        this.carRequests.next(mockCarRequests);
    }

    getCarRequests(): void {
        const stringifyRequests = this.storageService.get("car-request-repo");        
        if(stringifyRequests) {
            const parsedData = JSON.parse(stringifyRequests);

            this.carRequests.next(parsedData.map((request: { [key: string]: any; }) => CarRequest.fromJson(request))) ;
        }
    }

    getData(startIndex: number, offset: number, sort: MatSort | undefined) {
        return this.getPagedData(this.getSortedData([...this.carRequests.value], sort ), startIndex, offset);
    }

    getPopularColorbyAge() {
        // labels => mark age 
        // each data set option mark color 

        //filter color and age from request
        // calculate age
        // asoseate age to age group and insect color
        // if color exists add 1 to quantity else add color with quantity of 1
        // const colors: string[] = mockCarRequests.map(request => request.favoriteColor)
        // .filter((value, index, self) => self.indexOf(value) == index);
        const colors: string[] = Array.from(new Set(mockCarRequests.map((request) => request.favoriteColor)));

        const response: BarChartData = {
            labels: colors,
            datasets: [],
        };

        mockCarRequests.forEach((request) => {
            const colorIndex = response.labels.indexOf(request.favoriteColor);
            const age = this.calculateAge(request.birthDay);
            const ageGroupIndex = ageGroups.findIndex(
                (group) => age >= group.min && age <= group.max
            );

            let dataset = response.datasets.find(
                (set) => set.label === ageGroups[ageGroupIndex].label
            );

            if (!dataset) {
                dataset = {
                    label: ageGroups[ageGroupIndex].label,
                    data: new Array(colors.length).fill(0),
                };
                response.datasets.push(dataset);
            }

            dataset.data[colorIndex]++;
        });

        return response;
    }

    getPopularEngineByGender() {
        const motors = motorOptions.map(motor => motor.value.toString().toLowerCase());
        const response: BarChartData = {
            labels: motors,
            datasets: []
        };

        mockCarRequests.forEach((request) => {
            const motorIndex = response.labels.indexOf(request.motor.toLowerCase());
            let dataset = response.datasets.find((set) => set.label === request.gender);
          
            if (!dataset) {
              dataset = {
                label: request.gender,
                data: new Array(motors.length).fill(0),
              };
              response.datasets.push(dataset);
            }
          
            dataset.data[motorIndex]++;
        });

        return response;
        
    }

    getCommonHobbyAmongstVisitors() {
        const hobbiesCountMap = mockCarRequests
            .flatMap((request) => request.hobbies)
            .reduce((acc, hobby) => {
                const count = acc.get(hobby) || 0;
                acc.set(hobby, count + 1);
                return acc;
            }, new Map<string, number>());

        const response: BarChartData = {
            labels: Array.from(hobbiesCountMap.keys()),
            datasets: [{ label: "visitors", data: Array.from(hobbiesCountMap.values()) }],
        };
        
        return response;
    }

    getCityWithMostVisitors() {
        const cities: string[] = Array.from(new Set(mockCarRequests.map((request) => request.location.city)));

        const response: BarChartData = {
            labels: cities,
            datasets: [{ label: "visitors", data: new Array(cities.length).fill(0) }],
        };

        mockCarRequests.forEach((request) => {
            const cityIndex = response.labels.indexOf(request.location.city);
            response.datasets[0].data[cityIndex]++;
        });

        return response;
    }

    private calculateAge(birthDay: Date) {
        const currentYear = new Date(Date.now()).getFullYear();
        return Math.floor(currentYear - birthDay.getFullYear());
    }
    // public barChartData: ChartConfiguration<'bar'>['data'] = {
    //     labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    //     datasets: [
    //       { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
    //       { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    //     ]
    //   };

    getCount() {
        console.log("this.carRequests.value.length ==> ", this.carRequests.value.length);
        
        return this.carRequests.value.length;
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