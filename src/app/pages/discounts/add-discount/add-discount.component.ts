import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DiscountsService } from 'app/@core/services/apis/discounts.service';

@Component({
  selector: 'app-add-discount',
  templateUrl: './add-discount.component.html',
  styleUrls: ['./add-discount.component.scss']
})
export class AddDiscountComponent {
  createForm !: FormGroup;
  createData : boolean = false;
  constructor(
    private discount: DiscountsService,
    private router: Router
  ){}
  ngOnInit(): void{
    this.createForm = new FormGroup({
      nameDiscount: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
      contentDiscount: new FormControl('', [Validators.required])
    })
  }
  onSubmit() {
    if(this.createForm.valid){
      const formData = this.createForm.value;
      console.log(formData);
      this.discount.postDiscount(formData).subscribe(res=>{
        this.ngOnInit();
        this.createData = true;
        setTimeout(() => {
          this.createData = false;
          this.router.navigate(['pages/discounts/list-discount']);
        }, 1500);
      },err=>{
        console.error(err);
      })
    }
  }
}
