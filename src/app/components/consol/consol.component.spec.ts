import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolComponent } from './consol.component';

describe('ConsolComponent', () => {
  let component: ConsolComponent;
  let fixture: ComponentFixture<ConsolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
