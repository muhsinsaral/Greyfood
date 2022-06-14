import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KurumsalPageComponent } from './kurumsal-page/kurumsal-page.component';

const routes: Routes = [
  {path:'',component:KurumsalPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KurumsalRoutingModule { }
