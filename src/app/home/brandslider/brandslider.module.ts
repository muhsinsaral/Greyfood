import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsliderRoutingModule } from './brandslider-routing.module';
import { BrandsliderComponent } from './brandslider.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';


@NgModule({
  declarations: [
    BrandsliderComponent
  ],
  imports: [
    CommonModule,
    BrandsliderRoutingModule,
    NgxUsefulSwiperModule
  ],
  exports: [
    BrandsliderComponent
  ]
})
export class BrandsliderModule { }
