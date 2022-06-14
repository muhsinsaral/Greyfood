import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatalogPageComponent } from './katalog-page.component';

describe('KatalogPageComponent', () => {
  let component: KatalogPageComponent;
  let fixture: ComponentFixture<KatalogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatalogPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatalogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
