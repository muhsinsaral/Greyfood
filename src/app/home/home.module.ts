import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainsliderModule } from './mainslider/mainslider.module';
import { BrandsliderModule } from './brandslider/brandslider.module';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    MainsliderModule,
    BrandsliderModule
  ]
})
export class HomeModule { }
