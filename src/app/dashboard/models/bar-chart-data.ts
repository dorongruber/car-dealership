// export class BarChartData {
//     labels: string[];
//     datasets: BarChartDataSet[];
//     constructor(labels: string[],datasets: BarChartDataSet[]) {
//         this.labels = labels;
//         this.datasets = datasets
//     }
// }

import { CustomComponentRef } from "src/app/shared/models/custom-component-ref";

// export class BarChartDataSet {
//     data: number[];
//     label: string;

//     constructor(data: number[], label: string) {
//         this.data = data;
//         this.label = label;
//     }
// }

export interface BarChartData {
    labels: string[];
    datasets: BarChartDataSet[];
}

export interface BarChartDataSet {
    data: number[];
    label: string;
}

export interface PieChartData {
    labels: string[],
    data: number[],
}

export interface DynamicBarChartData {
    title: string;
    componentRef: CustomComponentRef;
    chartData: BarChartData;
}