import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { UsersService } from 'app/@core/services/apis/users.service';
import { DialogConfirmComponent } from 'app/@theme/components/dialog-confirm/dialog-confirm.component';

export interface Iusers {
  id: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  status: string;
  role: string;
}
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent {
  listUsers: any;
  lastUser: number = 0;
  currentUser: number = 0;
  createData : boolean = false;
  apiUrl = 'http://localhost:3000/api/users';
  constructor(
    private user: UsersService,
    private dialogService: NbDialogService
  ) {}
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.user.getUsers().subscribe(users =>{
      console.log(users);
      this.listUsers = users.data;
      // this.currentUser = users.meta.current_user;
      // this.lastUser = users.meta.last_user;
    })
  }
  getPage(users: any){
    this.listUsers = users;
    console.log(users);
  }
  openDeleteDialog(id: number): void {
    this.dialogService.open(DialogConfirmComponent, {
      context: {
        title: 'Xác nhận xóa',
        content: 'Bạn có chắc chắn muốn xóa đơn hàng này không?'
      }
    }).onClose.subscribe(confirmed => {
      if (confirmed) {
        this.deleteUser(id);
      } else {
      }
    });
  }

  deleteUser(id: number): void {
    this.user.deleteUser(id).subscribe(res => {
      console.log(res);
      this.getUsers();
      this.createData = true;
      setTimeout(() => {
        this.createData = false;
      }, 2500);
    });
  }
}
