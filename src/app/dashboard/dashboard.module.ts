import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';

import { NgChartsModule } from 'ng2-charts';

import { MainComponent } from './routes/main/main.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ColumnGraphComponent } from './components/column-graph/column-graph.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from './components/card/card.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { DynamicChartLoaderComponent } from './components/dynamic-chart-loader/dynamic-chart-loader.component';
import { PopulateChartService } from './services/populate-chart.service';



@NgModule({
  declarations: [
    MainComponent,
    ColumnGraphComponent,
    DashboardLayoutComponent,
    CardComponent,
    BarChartComponent,
    OrdersTableComponent,
    PieChartComponent,
    DynamicChartLoaderComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgChartsModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    PopulateChartService
  ]
})
export class DashboardModule { }
