import { Component } from '@angular/core';
import { DeliveriesService } from 'app/@core/services/apis/deliveries.service';
import { NbDialogService } from '@nebular/theme';
import { DialogConfirmComponent } from 'app/@theme/components/dialog-confirm/dialog-confirm.component';
import { Router } from '@angular/router';

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
  lastDelivery: number = 0;
  currentDelivery: number = 0;
  createData : boolean = false;
  apiUrl = 'http://localhost:3000/api/delivery';

  constructor(
    private deliveryService: DeliveriesService,
    private dialogService: NbDialogService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDeliveries();
  }

  getDeliveries() {
    this.deliveryService.getDeliveries().subscribe(data => {
      this.listDeliveries = data.data;
      this.currentDelivery = data.meta.current_delivery;
      this.lastDelivery = data.meta.last_delivery;
    });
  }

  getPage(deliveries: any) {
    this.listDeliveries = deliveries.data;
  }

  filterValue: string = '';
  filter() {
    this.listDeliveries = this.listDeliveries.filter(delivery => {
      return delivery.customer_name.includes(this.filterValue);
    });
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
      this.createData = true;
      setTimeout(() => {
        this.createData = false;
      }, 2500);
    });
  }
}
