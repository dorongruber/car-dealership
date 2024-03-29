import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, tap } from 'rxjs/operators';
import { DynamicBarChartData } from '../../models/bar-chart-data';
import { PopulateChartService } from '../../services/populate-chart.service';
import { CarRequestService } from 'src/app/shared/services/mock-car-request.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent {
  private breakpointObserver = inject(BreakpointObserver);

  barCharts: DynamicBarChartData[] = [];
  constructor(private populateChartService: PopulateChartService, private carRequestService: CarRequestService) {
    this.carRequestService.carRequests.pipe(tap(res => {
      this.barCharts = this.populateChartService.getPopulatedCharts();
    }
      )).subscribe()
    
  }

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      // selects layout 
      if (matches) {
        return {
          columns: 4,
          miniCard: { cols: 4, rows: 1 },
          chart: { cols: 4, rows: 2 },
          table: { cols: 4, rows: 4 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
      };
    })
  );
}
