import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscountsService } from 'app/@core/services/apis/discounts.service';

@Component({
  selector: 'app-edit-discount',
  templateUrl: './edit-discount.component.html',
  styleUrls: ['./edit-discount.component.scss']
})
export class EditDiscountComponent {
  data: any;
  editForm !: FormGroup;
  editNotification: boolean = false;
  id !: number;
  constructor(
    private discount: DiscountsService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.editForm = this.fb.group({
      nameDiscount: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      img: new FormControl(null),
      contentDiscount: new FormControl('', [Validators.required]),
    });
    this.getDisountById(this.id);
  }
  getDisountById(id: number) {
    this.discount.getDiscountById(id).subscribe(res => {
      this.data = res.data[0];
      this.createForm();
    }, err => {
      console.error(err);
    })
  }
  createForm(): void {
    this.editForm = new FormGroup({
      nameDiscount: new FormControl(this.data.nameDiscount, [Validators.required]),
      startDate: new FormControl(this.data.startDate, [Validators.required]),
      endDate: new FormControl(this.data.endDate, [Validators.required]),
      status: new FormControl(this.data.status, [Validators.required]),
      img: new FormControl(null),
      contentDiscount: new FormControl(this.data.contentDiscount, [Validators.required]),
    });
  }
  onSubmit(): void {
    console.log('bc');
    console.log(this.editForm);
    if (this.editForm.valid) {
      const formData = this.editForm.value;
      this.discount.putDiscount(formData, this.id).subscribe(res => {
        this.editNotification = true;
        setTimeout(() => {
          this.editNotification = false;
          this.router.navigate(['pages/discounts/list-discount']);
        }, 1500);
      }, err => {
        console.error(err);
      });
    }
  }
  formatDate(dateString: string): string {
    if (!dateString) return '';
    return dateString.split('T')[0];
  }
}
