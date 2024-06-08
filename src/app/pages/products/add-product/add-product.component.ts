import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
}
