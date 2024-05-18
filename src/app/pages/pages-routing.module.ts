import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { ListCategoriesComponent } from './categories/list-categories/list-categories.component';
import { ListInventoryComponent } from './inventories/list-inventory/list-inventory.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'users/edit-user',
        component: EditUserComponent,
      },
      {
        path: 'users/add-user',
        component: AddUserComponent,
      },
      {
        path: 'users/list-users',
        component: ListUsersComponent,
      },
      {
        path: 'products/add-product',
        component: AddProductComponent,
      },
      {
        path: 'products/list-products',
        component: ListProductsComponent,
      },
      {
        path: 'categories/add-category',
        component: AddCategoryComponent,
      },
      {
        path: 'categories/list-categories',
        component: ListCategoriesComponent,
      },
      {
        path: 'inventories/list-inventory',
        component: ListInventoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
