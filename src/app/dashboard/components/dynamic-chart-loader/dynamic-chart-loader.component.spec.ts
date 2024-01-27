import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicChartLoaderComponent } from './dynamic-chart-loader.component';

describe('DynamicChartLoaderComponent', () => {
  let component: DynamicChartLoaderComponent;
  let fixture: ComponentFixture<DynamicChartLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicChartLoaderComponent]
    });
    fixture = TestBed.createComponent(DynamicChartLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
