import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmenuComponent } from './listmenu.component';

describe('ListmenuComponent', () => {
  let component: ListmenuComponent;
  let fixture: ComponentFixture<ListmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListmenuComponent]
    });
    fixture = TestBed.createComponent(ListmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
