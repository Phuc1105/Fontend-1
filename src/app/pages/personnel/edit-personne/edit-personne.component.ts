import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelsService } from 'app/@core/services/apis/personnels.service';

@Component({
  selector: 'app-edit-personne',
  templateUrl: './edit-personne.component.html',
  styleUrls: ['./edit-personne.component.scss']
})
export class EditPersonneComponent implements OnInit {
  data: any;
  editForm !: FormGroup;
  editNotification : boolean = false; 
  id !: number;
  constructor(
    private personnel: PersonnelsService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ){}
  ngOnInit(): void { 
    this.id = this.route.snapshot.params['id'];
    this.editForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required]), 
      shift: new FormControl('', [Validators.required]),
      img: new FormControl(null)
    });  
    
    this.getPersonnelById(this.id);
  } 
  getPersonnelById(id: number): void {
    this.personnel.getPersonnelById(id).subscribe(res=>{
      this.data = res.data[0];
      this.createForm();
  },err=>{
    console.error(err);
  })
  }
  createForm(): void {
    this.editForm = new FormGroup({
      username: new FormControl(this.data.username, [Validators.required]),
      phone: new FormControl(this.data.phone, [Validators.required]),
      position: new FormControl(this.data.position, [Validators.required]),
      shift: new FormControl(this.data.shift, [Validators.required]),
      img: new FormControl(null)
      
    });
  }
  onSubmit(): void {
    if (this.editForm.valid) {
      const formData = this.editForm.value;
      console.log(formData);
      this.personnel.putPersonnel(formData, this.id).subscribe(res => {
        this.editNotification = true;
        setTimeout(() => {
          this.editNotification = false;
          this.router.navigate(['pages/personnels/list-personnel']);
        }, 1500);
      }, err => {
        console.error(err);
      });
    }
  }
  getFileNameFromPath(path: string): string {
    return path.split('\\').pop() || '';
  }
}
