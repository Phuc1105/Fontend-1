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
  apiUrl = 'http://localhost:3000/api/deliveries';

  constructor(
    private delivery: DeliveriesService
  ) { }

  ngOnInit(): void {
    this.getDeliveries();
  
  }
  getDeliveries() {
    this.delivery.getDeliveries().subscribe(data => {
      console.log(data);

      this.listDeliveries = data;
      this.currentDelivery = data.meta.current_delivery;
      this.lastDelivery = data.meta.last_delivery;
      localStorage.setItem('data', JSON.stringify(this.listDeliveries));
    });
  }
  getPage(deliveries: any) {
    this.listDeliveries = deliveries;
    console.log(deliveries);
  }
  filterValue: string = '';
  filter() {
    this.listDeliveries = this.listDeliveries.filter(delivery => {
      return delivery.customer_name.includes(this.filterValue);
    });
  }
}
