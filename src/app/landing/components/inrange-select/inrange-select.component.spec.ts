import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InrangeSelectComponent } from './inrange-select.component';

describe('InrangeSelectComponent', () => {
  let component: InrangeSelectComponent;
  let fixture: ComponentFixture<InrangeSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InrangeSelectComponent]
    });
    fixture = TestBed.createComponent(InrangeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
