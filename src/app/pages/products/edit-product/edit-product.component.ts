import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'app/@core/services/apis/products.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productForm: FormGroup;
  data: any;
  editNotification : boolean = false; 
  id!: number;

  constructor(
    private product: ProductService,
    private fb: FormBuilder,
    private route: ActivatedRoute,

  ) {
   
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productForm = this.fb.group({
      product_name: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required,Validators.min(1)]),
      status: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),

    });
    this.getProductById(this.id)
  }
  getProductById(id: number): void {
    this.product.getProductById(id).subscribe(res=>{
      this.data = res.data[0];
      this.createForm();
      console.log(this.data);
      this.productForm.patchValue({
        product_name: this.data.product_name,
        image: this.data.image,
        price: this.data.price,
        status: this.data.status,
        category: this.data.category
      })
      
  },err=>{
    console.error(err);
  })
  }
  createForm(): void {
    this.productForm = new FormGroup({
      product_name: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required,Validators.min(1)]),
      status: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      
    });
  }
  onSubmit(): void {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      console.log(formData);
      this.product.putProduct(formData, this.id).subscribe(res => {
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
