import { Component, Input, ViewChild } from '@angular/core';
import { DynamicBarChartData } from 'src/app/dashboard/models/bar-chart-data';
import { ComponenRefDirective } from 'src/app/shared/directives/container-ref.directive';
import { CustomControl } from '../../models/form-field';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-input-loader',
  templateUrl: './dynamic-input-loader.component.html',
  styleUrls: ['./dynamic-input-loader.component.scss']
})
export class DynamicInputLoaderComponent {
  @Input() control?: CustomControl | undefined;
  @ViewChild(ComponenRefDirective, { static: true}) bodyHost?: ComponenRefDirective;

  ngOnChanges(): void {
    if(this.control && this.bodyHost && this.control.data.componentRef) {
      
      this.bodyHost.viewContainerRef.clear();
      const ref = this.bodyHost.viewContainerRef.createComponent(this.control.data.componentRef.bodyComponent);
      ref.setInput("control", this.control);
      ref.setInput("parent", this.control.parent!.control as FormGroup);
    }
  }
}
