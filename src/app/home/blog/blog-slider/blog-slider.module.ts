import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { BlogSliderComponent } from './blog-slider.component';


@NgModule({
  declarations: [
    BlogSliderComponent
  ],
  imports: [
    CommonModule,
    NgxUsefulSwiperModule,
  ],
  exports: [
    BlogSliderComponent
  ]
})
export class BlogSliderModule { }
