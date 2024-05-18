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
import { ListDeliveriesComponent } from './delivery/list-deliveries/list-deliveries.component';
import { AddDeliveryComponent } from './delivery/add-delivery/add-delivery.component';
import { EditDeliveryComponent } from './delivery/edit-delivery/edit-delivery.component';
import { ListPersonnelComponent } from './personnel/list-personnel/list-personnel.component';
import { EditPersonneComponent } from './personnel/edit-personne/edit-personne.component';
import { AddPersonnelComponent } from './personnel/add-personnel/add-personnel.component';

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
      {
        path: 'delivery/list-deliveries',
        component: ListDeliveriesComponent,
      },
      {
        path: 'delivery/add-delivery',
        component: AddDeliveryComponent,
      },
      {
        path: 'delivery/edit-delivery',
        component: EditDeliveryComponent,
      },
      {
        data: { breadcrumb:'Nhân viên / Danh sách'},
        path: 'personnels/list-personnel',
        component: ListPersonnelComponent,
      },
      {
        data: { breadcrumb:'Nhân viên / Thêm'},
        path: 'personnels/add-personnel',
        component: AddPersonnelComponent,
      },
      {
        data: { breadcrumb:'Nhân viên / Sửa'},
        path: 'personnels/edit-personnel',
        component: EditPersonneComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
