import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllCategoriesComponent } from './home/kategoriler/all-categories/all-categories.component';
import { ChocolateComponent } from './home/kategoriler/chocolate/chocolate.component';
import { CoffeeComponent } from './home/kategoriler/coffee/coffee.component';
import { DrinksComponent } from './home/kategoriler/drinks/drinks.component';
import { IceCreamComponent } from './home/kategoriler/ice-cream/ice-cream.component';
import { SnacksComponent } from './home/kategoriler/snacks/snacks.component';
import { WaferComponent } from './home/kategoriler/wafer/wafer.component';

const routes: Routes = [
  {
    path: 'kurumsal', loadChildren: () => 
    import('./kurumsal/kurumsal.module').then(m=>m.KurumsalModule)
  },
  {
    path: 'blog', loadChildren: () => 
    import('./blog/blog.module').then(m=>m.BlogModule)
  },
  {
    path: 'katalog', loadChildren: () => 
    import('./katalog/katalog.module').then(m=>m.KatalogModule)
  },
  
 
  {
    path: '', component: HomeComponent,
    children: [
      {path:'all-categories',component:AllCategoriesComponent},
      {path:'snacks',component:SnacksComponent},
      {path:'drinks',component:DrinksComponent},
      {path:'wafer',component:WaferComponent},
      {path:'ice-cream',component:IceCreamComponent},
      {path:'chocolate',component:ChocolateComponent},
      {path:'coffee',component:CoffeeComponent},
    ]  
  },
  // {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
