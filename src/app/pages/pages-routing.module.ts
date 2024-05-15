import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import { UsersComponent } from 'app/users/users.component';
import { ProductComponent } from 'app/product/product.component';
import { CategoryComponent } from 'app/category/category.component';
import { InventoryComponent } from 'app/inventory/inventory.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
      data: {breadcrumb: 'Dashboard'},
    },
    {
      path: 'users',
      component: UsersComponent,
      data: {breadcrumb: 'Users'},
    },
    {
      path: 'product',
      component: ProductComponent,
      data: {breadcrumb: 'Product'},
    },{
      path: 'category',
      component: CategoryComponent,
      data: {breadcrumb: 'Category'},
    },{
      path: 'inventory',
      component: InventoryComponent,
      data: {breadcrumb: 'Inventory'},
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
