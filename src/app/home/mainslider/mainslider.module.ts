import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { MainsliderRoutingModule } from './mainslider-routing.module';
import { MainsliderComponent } from './mainslider.component';


@NgModule({
  declarations: [
    MainsliderComponent
  ],
  imports: [
    CommonModule,
    MainsliderRoutingModule,
    NgxUsefulSwiperModule
  ],
  exports: [
    MainsliderComponent
  ]
})
export class MainsliderModule { }
