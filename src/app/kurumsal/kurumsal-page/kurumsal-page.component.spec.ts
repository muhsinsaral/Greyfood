import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurumsalPageComponent } from './kurumsal-page.component';

describe('KurumsalPageComponent', () => {
  let component: KurumsalPageComponent;
  let fixture: ComponentFixture<KurumsalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurumsalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KurumsalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
