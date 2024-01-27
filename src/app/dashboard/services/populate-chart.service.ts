import { Injectable } from "@angular/core";
import { MockCarRequestService } from "src/app/shared/services/mock-car-request.service";
import { BarChartComponent } from "../components/bar-chart/bar-chart.component";
import { DynamicBarChartData } from "../models/bar-chart-data";
import { CustomComponentRef } from "src/app/shared/models/custom-component-ref";

@Injectable()
export class PopulateChartService {

   constructor(private carRequestService: MockCarRequestService) {}
   
   getPopulatedCharts(): DynamicBarChartData[] {
        return [
            {
                title: "most picked colors by age", 
                componentRef: new CustomComponentRef(BarChartComponent) , 
                chartData: this.carRequestService.getPopularColorbyAge()
            },
            {
                title: "Most picked engine type by gender", 
                componentRef: new CustomComponentRef(BarChartComponent), 
                chartData: this.carRequestService.getPopularEngineByGender()},
            {
                title: "most common hobby", 
                componentRef: new CustomComponentRef(BarChartComponent), 
                chartData: this.carRequestService.getCommonHobbyAmongstVisitors()},
            {
                title: "City with most visitors", 
                componentRef: new CustomComponentRef(BarChartComponent), 
                chartData: this.carRequestService.getCityWithMostVisitors()
            },
        ]
   }
}