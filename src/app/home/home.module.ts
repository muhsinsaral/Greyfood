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
import { KatalogComponent } from './katalog/katalog.component';
import { BlogComponent } from './blog/blog.component';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BlogSliderModule } from './blog/blog-slider/blog-slider.module';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    KurumsalComponent,
    KatalogComponent,
    BlogComponent,
    MobileAppComponent,
    AdvantagesComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    MainsliderModule,
    BrandsliderModule,
    KategorilerModule,
    SharedModule,
    BlogSliderModule
  ],
  exports:[]
})
export class HomeModule { }
