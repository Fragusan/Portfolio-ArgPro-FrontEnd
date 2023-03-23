import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalWorkComponent } from './gal-work.component';

describe('GalWorkComponent', () => {
  let component: GalWorkComponent;
  let fixture: ComponentFixture<GalWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
