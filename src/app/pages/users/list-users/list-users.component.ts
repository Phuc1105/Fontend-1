import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { API_USERS } from 'app/@core/config/api-endpoint.config';
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
  originalUsers: Iusers[] = [];
  lastPage: number = 0;
  currentPage: number = 0;
  createData : boolean = false;
  private _listFilter: string = '';
  apiUrl = API_USERS;
  constructor(
    private user: UsersService,
    private dialogService: NbDialogService
  ) {}
  ngOnInit(): void {
    this.getUsers();
  }
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.listUsers = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.originalUsers;
  }
  performFilter(filterBy: string): Iusers[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.originalUsers.filter((user: Iusers) =>
      user.username.toLocaleLowerCase().includes(filterBy)
    );
  }
  getUsers(){
    this.user.getUsers().subscribe(users =>{
      console.log(users);
      this.listUsers = users.data;
      this.originalUsers = users.data;
      this.currentPage = users.meta.current_page;
      this.lastPage = users.meta.last_page;
    })
  }
  getPage(users: any){
    this.listUsers = users;
    this.currentPage = users.meta.current_page;
    this.lastPage = users.meta.last_page;
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
