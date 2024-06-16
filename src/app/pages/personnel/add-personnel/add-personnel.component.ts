import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonnelsService } from 'app/@core/services/apis/personnels.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-personnel',
  templateUrl: './add-personnel.component.html',
  styleUrls: ['./add-personnel.component.scss']
})
export class AddPersonnelComponent {
  createForm !: FormGroup;
  createData : boolean = false;
  submitted: boolean = false;
  constructor(
    private personnel: PersonnelsService,
    private router : Router
  ){}
  ngOnInit(): void{
    this.createForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required ,Validators.pattern("^0[0-9]{9}$")]),
      position: new FormControl('', [Validators.required]),
      shift: new FormControl('', [Validators.required]),
      img: new FormControl(null, [Validators.required])
    })
  }
  onSubmit() {
    this.submitted = true;
    if(this.createForm.valid){
      const formData = this.createForm.value;
      formData.img = this.getFileNameFromPath(formData.img);
      console.log(formData);
      this.personnel.postPersonnel(formData).subscribe(res=>{
        this.ngOnInit();
        this.submitted = false;
        this.createData = true;
        setTimeout(() => {
          this.createData = false;
          this.router.navigate(['pages/personnels/list-personnel']);
        }, 1500);
      },err=>{
        console.error(err);
      })
    }
  }
  getFileNameFromPath(path: string): string {
    return path.split('\\').pop() || '';
  }
  
}
