import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveriesService } from 'app/@core/services/apis/deliveries.service';


@Component({
  selector: 'app-edit-delivery',
  templateUrl: './edit-delivery.component.html',
  styleUrls: ['./edit-delivery.component.scss']
})
export class EditDeliveryComponent implements OnInit {
  editdelivery: any = [];

  constructor(
    private deliveryService: DeliveriesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.deliveryService.getDeliveryById(id).subscribe(res => {
      console.log(res.data);
      this.editdelivery = res.data;
    });
  };


  update(): void {
    const id = +this.route.snapshot.params['id'];
    this.deliveryService.putDelivery(this.editdelivery, id).subscribe(res => {
      console.log(res);
      this.router.navigate(['/list_deliveries']);
    });
  }
}
