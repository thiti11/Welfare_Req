import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEquipmentComponent } from './order-equipment.component';

describe('OrderEquipmentComponent', () => {
  let component: OrderEquipmentComponent;
  let fixture: ComponentFixture<OrderEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
