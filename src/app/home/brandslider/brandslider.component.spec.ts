import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsliderComponent } from './brandslider.component';

describe('BrandsliderComponent', () => {
  let component: BrandsliderComponent;
  let fixture: ComponentFixture<BrandsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
