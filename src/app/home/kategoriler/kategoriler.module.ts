import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KategorilerRoutingModule } from './kategoriler-routing.module';
import { KategorilerComponent } from './kategoriler.component';
import { SnacksComponent } from './snacks/snacks.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { ChocolateComponent } from './chocolate/chocolate.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { DrinksComponent } from './drinks/drinks.component';
import { IceCreamComponent } from './ice-cream/ice-cream.component';
import { WaferComponent } from './wafer/wafer.component';


@NgModule({
  declarations: [
    KategorilerComponent,
    SnacksComponent,
    AllCategoriesComponent,
    ChocolateComponent,
    CoffeeComponent,
    DrinksComponent,
    IceCreamComponent,
    WaferComponent
  ],
  imports: [
    CommonModule,
    KategorilerRoutingModule
  ],
  exports: [
    KategorilerComponent,
  ]
})
export class KategorilerModule { }
