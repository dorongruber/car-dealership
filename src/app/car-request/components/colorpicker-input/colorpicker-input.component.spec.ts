import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorpickerInputComponent } from './colorpicker-input.component';

describe('ColorpickerInputComponent', () => {
  let component: ColorpickerInputComponent;
  let fixture: ComponentFixture<ColorpickerInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorpickerInputComponent]
    });
    fixture = TestBed.createComponent(ColorpickerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
