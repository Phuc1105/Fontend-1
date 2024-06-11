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
import { ListInventoryComponent } from './inventory/list-inventory/list-inventory.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ListDeliveriesComponent } from './delivery/list-deliveries/list-deliveries.component';
import { AddDeliveryComponent } from './delivery/add-delivery/add-delivery.component';
import { EditDeliveryComponent } from './delivery/edit-delivery/edit-delivery.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { RevenueComponent } from './statistics/revenue/revenue.component';
import { EditInventoryComponent } from './inventory/edit-inventory/edit-inventory.component';
import { ListPersonnelComponent } from './personnel/list-personnel/list-personnel.component';
import { EditPersonneComponent } from './personnel/edit-personne/edit-personne.component';
import { AddPersonnelComponent } from './personnel/add-personnel/add-personnel.component';
import { EditDiscountComponent } from './discounts/edit-discount/edit-discount.component';
import { AddDiscountComponent } from './discounts/add-discount/add-discount.component';
import { ListDiscountComponent } from './discounts/list-discount/list-discount.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        data: { breadcrumb:'Bảng thống kê'},
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        data: { breadcrumb:'Khách hàng/ Thêm'},
        path: 'users/edit-user/:id',
        component: EditUserComponent,
      },
      {
        data: { breadcrumb:'Khách hàng/ Thêm'},
        path: 'users/add-user',
        component: AddUserComponent,
      },
      {
        data: { breadcrumb:'Khách hàng/ Danh sách'},
        path: 'users/list-users',
        component: ListUsersComponent,
      },
      {
        data: { breadcrumb:'Sản phẩm / Thêm'},
        path: 'products/add-product',
        component: AddProductComponent,
      },
      {
        data: { breadcrumb:'Sản phẩm / Danh sách'},
        path: 'products/list-products',
        component: ListProductsComponent,
      },
      {
        path: 'products/edit-product',
        component: EditProductComponent,
      },
     
      
      {
        data: { breadcrumb:'Danh mục / Thêm'},
        path: 'categories/add-category',
        component: AddCategoryComponent,
      },
      {
        data: { breadcrumb:'Danh mục / Danh sách'},
        path: 'categories/list-categories',
        component: ListCategoriesComponent,
      },
      {
        data: { breadcrumb:'Danh mục / Sửa'},
        path: 'categories/edit-category/:id',
        component: EditCategoryComponent,
      },
      {
        data: { breadcrumb:'Đơn hàng / Danh sách'},
        path: 'inventory/list-inventory',
        component: ListInventoryComponent,
      },
      {
        data: { breadcrumb:'Vận chuyển / Danh sách'},
        path: 'delivery/list-deliveries',
        component: ListDeliveriesComponent,
      },
      {
        data: { breadcrumb:'Vận chuyển / Thêm'},
        path: 'delivery/add-delivery',
        component: AddDeliveryComponent,
      },
      {
        data: { breadcrumb:'Vận chuyển / Sửa'},
        path: 'delivery/edit-delivery/:id',
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
        path: 'personnels/edit-personnel/:id',
        component: EditPersonneComponent,
      },
      {
        data: { breadcrumb:'Khuyến mãi / Danh sách'},
        path: 'discounts/list-discount',
        component: ListDiscountComponent,
      },
      {
        data: { breadcrumb:'Khuyến mãi / Thêm'},
        path: 'discounts/add-discount',
        component: AddDiscountComponent,
      },
      {
        data: { breadcrumb:'Khuyến mãi / Sửa'},
        path: 'discounts/edit-discount/:id',
        component: EditDiscountComponent,
      },
      {
        data: { breadcrumb:'Thống kê / Bảng thống kê'},
        path: 'statistics/revenue',
        component: RevenueComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
