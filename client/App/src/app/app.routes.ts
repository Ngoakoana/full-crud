import { Routes } from '@angular/router';

import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './productlist/productlist.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent},
  { path: 'add', component: ProductFormComponent },
  { path: 'edit/:id', component: ProductFormComponent }
];
