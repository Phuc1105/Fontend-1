import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'app/@core/services/apis/categories.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  data: any;
  editForm!: FormGroup;
  editNotification : boolean = false; 
  id !: number;
  constructor(
    private category: CategoriesService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ){}
  ngOnInit(): void { 
    this.id = this.route.snapshot.params['id'];
    this.editForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]), 
      status: new FormControl('', [Validators.required]),
    });  
    
    this.getCategoryById(this.id);
  } 
  getCategoryById(id: number): void {
    this.category.getCategoryById(id).subscribe(res=>{
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
      description: new FormControl(this.data.description, [Validators.required]),
      role: new FormControl(this.data.role, [Validators.required]),
      status: new FormControl(this.data.status, [Validators.required]),
    });
  }
  onSubmit(): void {
    console.log('abc')
    if (this.editForm.valid) {
      const formData = this.editForm.value;
      console.log(formData);
      this.category.putCategory(formData, this.id).subscribe(res => {
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
