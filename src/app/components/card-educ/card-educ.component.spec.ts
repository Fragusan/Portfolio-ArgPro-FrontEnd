import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEducComponent } from './card-educ.component';

describe('CardEducComponent', () => {
  let component: CardEducComponent;
  let fixture: ComponentFixture<CardEducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEducComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
