import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalProComponent } from './gal-pro.component';

describe('GalProComponent', () => {
  let component: GalProComponent;
  let fixture: ComponentFixture<GalProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
