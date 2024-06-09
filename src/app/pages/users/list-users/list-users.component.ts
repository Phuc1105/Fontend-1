import { Component } from '@angular/core';
import { UserService } from 'app/@core/services/apis/user.service';

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
    private user: UserService
  ) { }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.user.getUsers().subscribe(users => {
      console.log(users);
      this.listUsers = users.data;
      this.currentUser = users.meta.current_user;
      this.lastUser = users.meta.last_user;
    })
  }
}
