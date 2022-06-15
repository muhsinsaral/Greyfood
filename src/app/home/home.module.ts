import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainsliderModule } from './mainslider/mainslider.module';
import { BrandsliderModule } from './brandslider/brandslider.module';
import { KategorilerModule } from './kategoriler/kategoriler.module';
import { KurumsalComponent } from './kurumsal/kurumsal.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    KurumsalComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    MainsliderModule,
    BrandsliderModule,
    KategorilerModule,
    SharedModule
  ],
  exports:[]
})
export class HomeModule { }
