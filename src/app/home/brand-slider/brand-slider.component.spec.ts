import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandSliderComponent } from './brand-slider.component';

describe('BrandSliderComponent', () => {
  let component: BrandSliderComponent;
  let fixture: ComponentFixture<BrandSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
