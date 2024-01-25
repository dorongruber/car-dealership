import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionSelectComponent } from './option-select.component';

describe('OptionSelectComponent', () => {
  let component: OptionSelectComponent;
  let fixture: ComponentFixture<OptionSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionSelectComponent]
    });
    fixture = TestBed.createComponent(OptionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
