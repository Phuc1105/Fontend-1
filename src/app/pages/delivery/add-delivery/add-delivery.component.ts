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
  orderForm!: FormGroup;
  createData: boolean = false;
  constructor(
    private deliveryService: DeliveriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.orderForm = new FormGroup({
      customer_name: new FormControl('', [Validators.required]),
      customer_phone: new FormControl('', [Validators.required, Validators.pattern("^0[0-9]{9}$")]),
      milkTea_flavor: new FormControl('', [Validators.required]),
      sugar: new FormControl('', [Validators.required]),
      ice: new FormControl('', [Validators.required]),
      toppings: new FormControl('', [Validators.required])
    });    
  }
  onSubmit(): void {
    if(this.orderForm.valid){
      const formData = this.orderForm.value;
      console.log(formData);
      this.deliveryService.postDeliveries(formData).subscribe(res=>{
        this.createData = true;
        setTimeout(() => {
          this.createData = false;
        }, 1500);
      },err=>{
        console.error(err);
      })
    }
  }

  
  
}
