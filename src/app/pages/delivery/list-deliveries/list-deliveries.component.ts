import { Component } from '@angular/core';
import { DeliveriesService } from 'app/@core/services/apis/deliveries.service';

export interface IDeliveries {
  id: number;
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
  apiUrl = 'http://localhost:3000/api/delivery';

  constructor(
    private delivery: DeliveriesService
  ) { }

  ngOnInit(): void {
    this.getDeliveries();
  }
  getDeliveries() {
    this.delivery.getDeliveries().subscribe(data => {
      this.listDeliveries = data.data;
      this.currentDelivery = data.meta.current_delivery;
      this.lastDelivery = data.meta.last_delivery;
    });
  }
  getPage(deliveries: any) {
    this.listDeliveries = deliveries.data;
    console.log(deliveries);
  }
  filterValue: string = '';
  filter() {
    this.listDeliveries = this.listDeliveries.filter(delivery => {
      return delivery.customer_name.includes(this.filterValue);
    });
  }
}
