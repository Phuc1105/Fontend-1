import { Component } from '@angular/core';
import { PersonnelsService } from 'app/@core/services/apis/personnels.service';


export interface Ipersonnel {
  id: string;
  img: string;
  name: string;
  phone: string;
  position: string;
  status: string;
  shift: string;
}
@Component({
  selector: 'app-list-personnel',
  templateUrl: './list-personnel.component.html',
  styleUrls: ['./list-personnel.component.scss']
})
export class ListPersonnelComponent {
  lisPersonnels: any;
  constructor(
    private personnel: PersonnelsService,
  ) {}
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.personnel.getPersonnel().subscribe(personnels =>{
      console.log(personnels);
      this.lisPersonnels = personnels.data;
    })
  }
}
