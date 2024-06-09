import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonnelsService } from 'app/@core/services/apis/personnels.service';

@Component({
  selector: 'app-edit-personne',
  templateUrl: './edit-personne.component.html',
  styleUrls: ['./edit-personne.component.scss']
})
export class EditPersonneComponent {
  data: any;
  id !: number;
  constructor(
    private personnel: PersonnelsService,
    private route: ActivatedRoute,
  ){}
  ngOnInit(): void { 
    this.id = this.route.snapshot.params['id'];
    this.getPersonnelById(this.id);
  }
  getPersonnelById(id: number): void {
    this.personnel.getPersonnelById(id).subscribe(res=>{
      this.data = res.data[0];
      console.log(this.data);
  },err=>{
    console.error(err);
  })
  }
}
