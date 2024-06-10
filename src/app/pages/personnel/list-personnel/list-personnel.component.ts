import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { API_PERSONNELS } from 'app/@core/config/api-endpoint.config';
import { PersonnelsService } from 'app/@core/services/apis/personnels.service';
import { DialogConfirmComponent } from 'app/@theme/components/dialog-confirm/dialog-confirm.component';


export interface Ipersonnel {
  id: string;
  img: string;
  username: string;
  phone: string;
  position: string;
  shift: string
}
@Component({
  selector: 'app-list-personnel',
  templateUrl: './list-personnel.component.html',
  styleUrls: ['./list-personnel.component.scss']
})
export class ListPersonnelComponent {
  lisPersonnels: any;
  deleteNotification: boolean = false;
  lastPage: number = 0;
  currentPage: number = 0;
  apiUrl = API_PERSONNELS;
  constructor(
    private personnel: PersonnelsService,
    private dialogService: NbDialogService,
  ) { }
  ngOnInit(): void {
    this.getPersonnels();
  }
  getPersonnels() {
    this.personnel.getPersonnel().subscribe(res => {
      console.log(res);
      this.lisPersonnels = res.data;
      this.currentPage = res.meta.current_page;
      this.lastPage = res.meta.last_page;
    }, err => {
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
        content: 'Bạn có chắc chắn muốn xóa nhân viên này không?'
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
