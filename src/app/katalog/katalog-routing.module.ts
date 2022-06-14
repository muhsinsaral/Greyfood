import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KatalogPageComponent } from './katalog-page/katalog-page.component';

const routes: Routes = [
  {path:'',component:KatalogPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KatalogRoutingModule { }
