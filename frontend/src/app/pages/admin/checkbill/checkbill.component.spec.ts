import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckbillComponent } from './checkbill.component';

describe('CheckbillComponent', () => {
  let component: CheckbillComponent;
  let fixture: ComponentFixture<CheckbillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckbillComponent]
    });
    fixture = TestBed.createComponent(CheckbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
