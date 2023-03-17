import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicProfileComponent } from './pic-profile.component';

describe('PicProfileComponent', () => {
  let component: PicProfileComponent;
  let fixture: ComponentFixture<PicProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
