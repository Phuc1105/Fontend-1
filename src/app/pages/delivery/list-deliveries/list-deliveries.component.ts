import { Component, ViewChild } from '@angular/core';
import { DeliveriesService } from 'app/@core/services/apis/deliveries.service';
import { NbDialogService } from '@nebular/theme';
import { DialogConfirmComponent } from 'app/@theme/components/dialog-confirm/dialog-confirm.component';
import { Router } from '@angular/router';
import { API_DELIVERIES } from 'app/@core/config/api-endpoint.config';
import { AlertShowcaseComponent } from 'app/@theme/components/alert/ngx-alerts.component';

export interface IDeliveries {
  id: string;
  customer_name: string;
  customer_phone: string;
  milkTea_flavor: string;
  sugar: string;
  ice: string;
  toppings: string;
}

@Component({
  selector: 'app-list-deliveries',
  templateUrl: './list-deliveries.component.html',
  styleUrls: ['./list-deliveries.component.scss']
})
export class ListDeliveriesComponent {
  listDeliveries: IDeliveries[] = [];
  originalDeliveries: IDeliveries[] = [];
  lastPage: number = 0;
  currentPage: number = 0;
  createData: boolean = false;
  searchData: any;
  private _listFilter: string = '';
  apiUrl = API_DELIVERIES;

  @ViewChild(AlertShowcaseComponent) alertShowcase: AlertShowcaseComponent;
  constructor(
    private deliveryService: DeliveriesService,
    private dialogService: NbDialogService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDeliveries();
  }
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.listDeliveries = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.originalDeliveries;
  }
  performFilter(filterBy: string): IDeliveries[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.originalDeliveries.filter((delivery: IDeliveries) =>
      delivery.customer_name.toLocaleLowerCase().includes(filterBy)
    );
  }
  getDeliveries() {
    this.deliveryService.getDeliveries().subscribe(data => {
      this.listDeliveries = data.data;
      this.originalDeliveries = data.data;
      this.currentPage = data.meta.current_page;
      this.lastPage = data.meta.last_page;

    });
  }

  getPage(res: any) {
    this.listDeliveries = res.data;
    this.currentPage = res.meta.current_page;
    this.lastPage = res.meta.last_page;
  }


  openDeleteDialog(id: number): void {
    this.dialogService.open(DialogConfirmComponent, {
      context: {
        title: 'Xác nhận xóa',
        content: 'Bạn có chắc chắn muốn xóa đơn hàng này không?'
      }
    }).onClose.subscribe(confirmed => {
      if (confirmed) {
        this.deleteDelivery(id);
      } else {
      }
    });
  }

  deleteDelivery(id: number): void {
    this.deliveryService.deleteDelivery(id).subscribe(res => {
      console.log(res);
      this.getDeliveries();
      this.alertShowcase.addMessage({ status: 'success', message: 'Xóa thành công!' });
    });
  }
  
}
