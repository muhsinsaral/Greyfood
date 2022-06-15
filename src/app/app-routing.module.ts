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
      {path:'snacks',component:AllCategoriesComponent},
      {path:'drinks',component:AllCategoriesComponent},
      {path:'wafer',component:AllCategoriesComponent},
      {path:'ice-cream',component:AllCategoriesComponent},
      {path:'chocolate',component:AllCategoriesComponent},
      {path:'coffee',component:AllCategoriesComponent},
    ]  
  },
  // {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
