import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
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

  ngOnInit(): void {
    this.productForm.patchValue({
      username: 'Trà sữa trứng',
      price: 30000,
      status: '1',
      role: '1'
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
