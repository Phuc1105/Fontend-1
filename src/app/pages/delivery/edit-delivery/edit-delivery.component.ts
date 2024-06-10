import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-delivery',
  templateUrl: './edit-delivery.component.html',
  styleUrls: ['./edit-delivery.component.scss']
})
export class EditDeliveryComponent implements OnInit {
  delivery: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    console.log(id);
    const data = JSON.parse(localStorage.getItem('data') || '[]');
    console.log(data);
    data.forEach((element: { id: number }) => {
      if (element.id === id) {
        this.delivery = element;
        console.log(this.delivery);
      }
    });
    if (!this.delivery) {
      console.error('Không tìm thấy đơn hàng');
    }
  }
}
