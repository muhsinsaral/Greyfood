import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { ChocolateComponent } from './chocolate/chocolate.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { DrinksComponent } from './drinks/drinks.component';
import { IceCreamComponent } from './ice-cream/ice-cream.component';
import { SnacksComponent } from './snacks/snacks.component';
import { WaferComponent } from './wafer/wafer.component';

const routes: Routes = [
  {
    path: '', component: AllCategoriesComponent,
    children: [
      {path:'',component:AllCategoriesComponent},
      {path:'snacks',component:SnacksComponent},
      {path:'drinks',component:DrinksComponent},
      {path:'wafer',component:WaferComponent},
      {path:'ice-cream',component:IceCreamComponent},
      {path:'chocolate',component:ChocolateComponent},
      {path:'coffee',component:CoffeeComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KategorilerRoutingModule { }
