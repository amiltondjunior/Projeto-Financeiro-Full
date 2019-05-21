import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
//import { format } from 'url';

const routes: Routes = [
  {path: 'categories', loadChildren: './pages/categories/categories.module#CategoriesModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
