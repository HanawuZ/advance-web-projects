import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatustableComponent } from './statustable.component';

describe('StatustableComponent', () => {
  let component: StatustableComponent;
  let fixture: ComponentFixture<StatustableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatustableComponent]
    });
    fixture = TestBed.createComponent(StatustableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
