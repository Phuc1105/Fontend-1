import { Component, OnInit } from '@angular/core';

interface IDeliveries {
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
export class ListDeliveriesComponent implements OnInit {
  listDeliveries: IDeliveries[] = []; 
  deliveries= [
    {
      id: 1,
      customer_name: "Như Ý",
      customer_phone: "0905601590",
      milkTea_flavor: "Truyền thống",
      sugar: "50",
      ice: "70",
      toppings: "Trân Châu, Thạch Lô Hội"
    },
    {
      id: 2,
      customer_name: "Huyền My",
      customer_phone: "0902345678",
      milkTea_flavor: "Matcha",
      sugar: "30",
      ice: "50",
      toppings: "Pudding"
    },
    {
      id: 3,
      customer_name: "Minh Khang",
      customer_phone: "0908765432",
      milkTea_flavor: "Khoai Môn",
      sugar: "70",
      ice: "30",
      toppings: "Thạch Đen"
    },
    {
      id: 4,
      customer_name: "Quỳnh Anh",
      customer_phone: "0912345678",
      milkTea_flavor: "Dưa Gang",
      sugar: "100",
      ice: "0",
      toppings: "Thạch Lô Hội, Thạch Đen"
    },
    {
      id: 5,
      customer_name: "Thanh Phong",
      customer_phone: "0918765432",
      milkTea_flavor: "Sô-cô-la",
      sugar: "0",
      ice: "100",
      toppings: "Trân Châu"
    },
    {
      id: 6,
      customer_name: "Ngọc Lan",
      customer_phone: "0922345678",
      milkTea_flavor: "Matcha",
      sugar: "50",
      ice: "50",
      toppings: "Pudding, Trân Châu"
    },
    {
      id: 7,
      customer_name: "Bảo An",
      customer_phone: "0928765432",
      milkTea_flavor: "Truyền thống",
      sugar: "50",
      ice: "50",
      toppings: "Pudding, Trân Châu"
    },
    {
      id: 8,
      customer_name: "Trọng Nhân",
      customer_phone: "0932345678",
      milkTea_flavor: "Matcha",
      sugar: "70",
      ice: "30",
      toppings: "Trân Châu, Thạch Đen"
    },
    {
      id: 9,
      customer_name: "Minh Châu",
      customer_phone: "0938765432",
      milkTea_flavor: "Khoai Môn",
      sugar: "30",
      ice: "70",
      toppings: "Thạch Đen"
    },
    {
      id: 10,
      customer_name: "Thanh Tuyền",
      customer_phone: "0942345678",
      milkTea_flavor: "Dưa Gang",
      sugar: "50",
      ice: "50",
      toppings: "Trân Châu, Thạch Lô Hội"
    }
  ];

  constructor() {}

  ngOnInit(): void {
    this.listDeliveries = this.deliveries;
    localStorage.setItem('data', JSON.stringify(this.deliveries));

  }

  filterValue: string = '';

  filter() {
    this.deliveries = this.listDeliveries.filter(p => p.customer_name.includes(this.filterValue));
  }
}
  