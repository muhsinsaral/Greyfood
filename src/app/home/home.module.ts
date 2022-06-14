import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { BrandSliderComponent } from './brand-slider/brand-slider.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    MainSliderComponent,
    BrandSliderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule
  ]
})
export class HomeModule { }
