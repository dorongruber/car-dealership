import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicInputLoaderComponent } from './dynamic-input-loader.component';

describe('DynamicInputLoaderComponent', () => {
  let component: DynamicInputLoaderComponent;
  let fixture: ComponentFixture<DynamicInputLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicInputLoaderComponent]
    });
    fixture = TestBed.createComponent(DynamicInputLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
