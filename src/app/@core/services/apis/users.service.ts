import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Iusers } from 'app/pages/users/list-users/list-users.component';

const API_USER = 'http://localhost:3000/api/users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }
  getUsers(): Observable<any> {
    return this.http.get(API_USER);
  }
  postUsers(user: any): Observable<any> {
    return this.http.post(API_USER, {
      username: user.username,
      password:  user.password,
      email: user.email,
      phone: user.phone,
      status: user.status,
      role: user.role,
    } )
  }
  getUserById(id: number): Observable<any>{
    return this.http.get(`${API_USER}/${id}`);
  }
  putUser(user: Iusers, id: number): Observable<any>{
    return this.http.put(`${API_USER}/${id}`, {
      username: user.username,
      password:  user.password,
      email: user.email,
      phone: user.phone,
      status: user.status,
      role: user.role,
    });
  }
  deleteUser(id: number): Observable<any>{
    return this.http.delete(`${API_USER}/${id}`);
  }
}
