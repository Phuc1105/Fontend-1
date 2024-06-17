import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveriesService } from 'app/@core/services/apis/deliveries.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertShowcaseComponent } from 'app/@theme/components/alert/ngx-alerts.component';

@Component({
  selector: 'app-edit-delivery',
  templateUrl: './edit-delivery.component.html',
  styleUrls: ['./edit-delivery.component.scss']
})
export class EditDeliveryComponent implements OnInit {
  editForm!: FormGroup;
  editdelivery: any = {};
  constructor(
    private deliveryService: DeliveriesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  @ViewChild(AlertShowcaseComponent) alertShowcase: AlertShowcaseComponent;
  ngOnInit(): void {
    this.editForm = new FormGroup({
      customer_name: new FormControl('', [Validators.required]),
      customer_phone: new FormControl('', [Validators.required, Validators.pattern("^0[0-9]{9}$")]),
      milkTea_flavor: new FormControl('', [Validators.required]),
      sugar: new FormControl('', [Validators.required]),
      ice: new FormControl('', [Validators.required]),
      toppings: new FormControl('', [Validators.required])
    });

    const id = +this.route.snapshot.params['id'];
    this.deliveryService.getDeliveryById(id).subscribe(res => {

      console.log("Dữ liệu log: ", res.data);
      const data = res.data;

      this.editdelivery = data[0];

      this.editForm.patchValue({
        customer_name: this.editdelivery.customer_name,
        customer_phone: this.editdelivery.customer_phone,
        milkTea_flavor: this.editdelivery.milkTea_flavor,
        sugar: this.editdelivery.sugar,
        ice: this.editdelivery.ice,
        toppings: this.editdelivery.toppings
      });
    });
  }

  update(): void {
    const id = +this.route.snapshot.params['id'];
    if (this.editForm.valid) {
      const updatedDelivery = this.editForm.value;
      this.deliveryService.putDelivery(updatedDelivery, id).subscribe(res => {
        this.alertShowcase.addMessage({ status: 'success', message: 'Sửa thành công!' });
        setTimeout(() => {
          this.router.navigate(['/pages/delivery/list-deliveries']);
        }, 2000);
       
        console.log(res);
      });
    }
  }
}
  
