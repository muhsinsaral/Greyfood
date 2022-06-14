import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

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
  
 
  {path:'',component:HomeComponent},
  // {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
