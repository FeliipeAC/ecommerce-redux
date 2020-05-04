import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableItemsCartComponent } from './table-items-cart.component';

describe('TableItemsCartComponent', () => {
  let component: TableItemsCartComponent;
  let fixture: ComponentFixture<TableItemsCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableItemsCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableItemsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
