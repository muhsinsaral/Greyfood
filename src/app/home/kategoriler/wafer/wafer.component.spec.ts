import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaferComponent } from './wafer.component';

describe('WaferComponent', () => {
  let component: WaferComponent;
  let fixture: ComponentFixture<WaferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
