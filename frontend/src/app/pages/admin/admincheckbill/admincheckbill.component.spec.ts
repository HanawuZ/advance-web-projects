import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCheckbillComponent } from './admincheckbill.component';

describe('AdminCheckbillComponent', () => {
  let component: AdminCheckbillComponent;
  let fixture: ComponentFixture<AdminCheckbillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCheckbillComponent]
    });
    fixture = TestBed.createComponent(AdminCheckbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
