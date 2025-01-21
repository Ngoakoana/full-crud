import { Routes } from '@angular/router';

import { ProductFormComponent } from './Components/product-form/product-form.component';

import { HomeComponent } from './Components/home/home/home.component';
import { ProductListComponent } from './productlist/productlist.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {path:'home', component: HomeComponent}
,  { path: 'products', component: ProductListComponent},
  { path: 'add', component: ProductFormComponent },
  { path: 'edit/:id', component: ProductFormComponent }
];
