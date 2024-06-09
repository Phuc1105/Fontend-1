import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'app/@core/services/apis/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  productForm: FormGroup;
  product: any ={};
  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private router: Router) {

    this.productForm = this.fb.group({
      username: ['', Validators.required],
      file: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      status: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log('Form Submitted', this.productForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
  create(): void {
    this.productService.postProducts(this.product).subscribe(res => {
      console.log(res);
      this.router.navigate(['/products/list-products']);
    });
  }
}
