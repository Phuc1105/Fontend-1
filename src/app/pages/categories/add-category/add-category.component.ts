import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'app/@core/services/apis/categories.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  createForm !: FormGroup;
  createData : boolean = false;
  constructor(
    private categories: CategoriesService,
  ){}
  ngOnInit(): void{
    this.createForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
    })
  }
  onSubmit() {
    if(this.createForm.valid){
      const formData = this.createForm.value;
      console.log(formData);
      this.categories.postCategory(formData).subscribe(res=>{
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
}
