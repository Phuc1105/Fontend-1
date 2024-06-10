import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'app/@core/services/apis/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  productForm: FormGroup;
  createData : boolean = false;
  // product: any ={};
  constructor(
    private productService: ProductService,

    private router: Router) {

   
  }
  ngOnInit(): void {
    this.productForm = new FormGroup({
      product_name: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
      status: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    if (this.productForm.valid) {
      console.log('Form Submitted', this.productForm.value);

      const formData = this.productForm.value;
      console.log(formData);
      this.productService.postProducts(formData).subscribe(res=>{
        this.ngOnInit();
        this.createData = true;
        setTimeout(() => {
          this.createData = false;
        }, 1500);
      },err=>{
        console.error(err);
      })
    }
  }
  // create(): void {
  //   this.productService.postProducts(this.product).subscribe(res => {
  //     console.log(res);
  //     this.router.navigate(['/products/list-products']);
  //   });
  // }
}
