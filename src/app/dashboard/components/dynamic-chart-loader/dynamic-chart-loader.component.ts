import { Component, Input, ViewChild } from '@angular/core';
import { ComponenRefDirective } from 'src/app/shared/directives/container-ref.directive';
import { DynamicBarChartData } from '../../models/bar-chart-data';

@Component({
  selector: 'app-dynamic-chart-loader',
  templateUrl: './dynamic-chart-loader.component.html',
  styleUrls: ['./dynamic-chart-loader.component.scss']
})
export class DynamicChartLoaderComponent {
  @Input() componentRefData?: DynamicBarChartData | undefined;
  @ViewChild(ComponenRefDirective, { static: true}) bodyHost?: ComponenRefDirective;

  ngOnChanges(): void {
    if(this.componentRefData && this.bodyHost) {
      
      this.bodyHost.viewContainerRef.clear();
      const ref = this.bodyHost.viewContainerRef.createComponent(this.componentRefData.componentRef.bodyComponent);
      ref.setInput("chartData", this.componentRefData.chartData);
    }
  }
}
