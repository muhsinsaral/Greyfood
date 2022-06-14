import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KatalogRoutingModule } from './katalog-routing.module';
import { KatalogPageComponent } from './katalog-page/katalog-page.component';


@NgModule({
  declarations: [
    KatalogPageComponent
  ],
  imports: [
    CommonModule,
    KatalogRoutingModule
  ]
})
export class KatalogModule { }
