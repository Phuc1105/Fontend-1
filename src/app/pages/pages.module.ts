import {NgModule} from '@angular/core';
import {NbMenuModule} from "@nebular/theme";
import {ThemeModule} from '../@theme/theme.module';

import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PagesRoutingModule} from './pages-routing.module';
import {PaginatorModule} from "../@theme/components/paginator/paginator.module";
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
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { RevenueComponent } from './statistics/revenue/revenue.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    NbMenuModule,
    PaginatorModule,
  ],
  declarations: [
    PagesComponent,
    AddUserComponent,
    ListUsersComponent,
    AddProductComponent,
    ListProductsComponent,
    AddCategoryComponent,
    ListCategoriesComponent,
    ListInventoryComponent,
    EditUserComponent,
    ListDeliveriesComponent,
    AddDeliveryComponent,
    EditDeliveryComponent,
    EditProductComponent,
    RevenueComponent,
  ],
  providers: []
})
export class PagesModule { }
