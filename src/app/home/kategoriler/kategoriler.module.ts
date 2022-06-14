import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KategorilerRoutingModule } from './kategoriler-routing.module';
import { KategorilerBaseComponent } from './kategoriler-base/kategoriler-base.component';


@NgModule({
  declarations: [
    KategorilerBaseComponent
  ],
  imports: [
    CommonModule,
    KategorilerRoutingModule
  ]
})
export class KategorilerModule { }
