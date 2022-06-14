import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KurumsalRoutingModule } from './kurumsal-routing.module';
import { KurumsalPageComponent } from './kurumsal-page/kurumsal-page.component';


@NgModule({
  declarations: [
    KurumsalPageComponent
  ],
  imports: [
    CommonModule,
    KurumsalRoutingModule
  ]
})
export class KurumsalModule { }
