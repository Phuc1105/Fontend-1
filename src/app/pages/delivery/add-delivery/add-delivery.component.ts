import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DeliveriesService } from 'app/@core/services/apis/deliveries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: ['./add-delivery.component.scss']
})
export class AddDeliveryComponent implements OnInit {
  orderForm: FormGroup;

  constructor(
    private deliveryService: DeliveriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.orderForm = new FormGroup({
      customer_name: new FormControl('', [Validators.required]),
      customer_phone: new FormControl('', [Validators.required, Validators.pattern("^0[0-9]{9}$")]),
      milkTea_flavor: new FormControl('original'),
      sugar: new FormControl('0'),
      ice: new FormControl('0'),
      toppings: new FormControl([])
    });
  }

  onSubmit(): void {
    if (this.orderForm.valid) {
      this.create();
    } else {
      console.log('Form is not valid');
    }
  }

  create(): void {
    this.deliveryService.postDeliveries(this.orderForm.value).subscribe(
      (data) => {
        console.log('New delivery created:', data);
        this.router.navigate(['/pages/delivery/list-deliveries']);
      },
      (error) => {
        console.error('Error creating new delivery:', error);
      }
    );
  }
}
