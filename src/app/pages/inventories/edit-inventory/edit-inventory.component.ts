import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InventoriesService } from 'app/@core/services/apis/inventories.service';

@Component({
  selector: 'app-edit-inventory',
  templateUrl: './edit-inventory.component.html',
  styleUrls: ['./edit-inventory.component.scss']
})
export class EditInventoryComponent implements OnInit {
  data: any;
  editForm!: FormGroup;
  editNotification : boolean = false; 
  id !: number;
  constructor(
    private inventory: InventoriesService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ){}
  ngOnInit(): void { 
    this.id = this.route.snapshot.params['id'];
    this.editForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      product: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]), 
      total_price: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required])
    });  
    
    this.getInventoryById(this.id);
  } 
  getInventoryById(id: number): void {
    this.inventory.getInventoryById(id).subscribe(res=>{
      console.log(res);
      
      this.data = res.data[0];
      this.createForm();
  },err=>{
    console.error(err);
  })
  }
  createForm(): void {
    this.editForm = new FormGroup({
      name: new FormControl(this.data.name, [Validators.required]),
      product: new FormControl(this.data.product, [Validators.required]),
      quantity: new FormControl(this.data.quantity, [Validators.required]),
      total_price: new FormControl(this.data.total_price, [Validators.required]),
      status: new FormControl(this.data.status, [Validators.required])
    });
  }
  onSubmit(): void {
    console.log('abc')
    if (this.editForm.valid) {
      const formData = this.editForm.value;
      console.log(formData);
      this.inventory.putInventory(formData, this.id).subscribe(res => {
        this.editNotification = true;
        setTimeout(() => {
          this.editNotification = false;
        }, 1500);
      }, err => {
        console.error(err);
      });
    }
  }
  
}
