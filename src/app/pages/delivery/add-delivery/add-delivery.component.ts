import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: ['./add-delivery.component.scss']
})
export class AddDeliveryComponent {
  orderForm!: FormGroup;

  constructor() {}
  
  ngOnInit(): void {
    this.orderForm = new FormGroup({
      customer_name: new FormControl('', [Validators.required]),
      customer_phone: new FormControl('', [Validators.required, Validators.pattern("^0[0-9]{9}$")]),
     
    });
  }
  onSubmit(){
    if(this.orderForm.valid){
      console.log(this.orderForm.value);
    }else{
      console.log('Form is not valid');
      
    }
    
  }
}
