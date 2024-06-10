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
  getPersonnels(){
    this.personnel.getPersonnel().subscribe(res =>{
      console.log(res);
      this.lisPersonnels = res.data;
      this.currentPage = res.meta.current_page;
      this.lastPage = res.meta.last_page;
    },err=>{
      console.error(err);
    })
  }
  getPage(res: any) {
      this.lisPersonnels = res.data;
      this.currentPage = res.meta.current_page;
      this.lastPage = res.meta.last_page;
  }
  
  openDeleteDialog(id: number): void {
    this.dialogService.open(DialogConfirmComponent, {
      context: {
        title: 'Xác nhận xóa',
        content: 'Bạn có chắc chắn muốn xóa đơn hàng này không?'
      }
    }).onClose.subscribe(confirmed => {
      if (confirmed) {
        this.btnDelete(id);
      } else {
      }
    });
  }
  btnDelete(id: number): void {
    this.personnel.deletePersonnel(id).subscribe(
      res => {
        this.deleteNotification = true; 
        setTimeout(() => {
          this.deleteNotification = false;
        }, 1500);
        this.getPersonnels();
      },
      err => {
        console.error(err);
      }
    );
  }
}
