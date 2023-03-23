import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarProComponent } from './car-pro.component';

describe('CarProComponent', () => {
  let component: CarProComponent;
  let fixture: ComponentFixture<CarProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
