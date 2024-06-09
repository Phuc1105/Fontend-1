import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/@core/services/apis/users.service';

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
  apiUrl = 'http://localhost:3000/api/users';
  constructor(
    private user: UsersService
  ) {}
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.user.getUsers().subscribe(users =>{
      console.log(users);
      this.listUsers = users;
      this.currentUser = users.meta.current_user;
      this.lastUser = users.meta.last_user;
    })
  }
  getPage(users: any){
    this.listUsers = users;
    console.log(users);
  }
}
