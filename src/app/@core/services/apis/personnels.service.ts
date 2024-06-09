import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Ipersonnel } from 'app/pages/personnel/list-personnel/list-personnel.component';

const API_USER = 'http://localhost:3000/api/personnels';
@Injectable({
  providedIn: 'root'
})
export class PersonnelsService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }
  getPersonnel(): Observable<any> {
    return this.http.get(API_USER);
  }
  postPersonnel(personnel: any): Observable<any> {
    return this.http.post(API_USER, {
      username: personnel.username,
      phone:  personnel.phone,
      position: personnel.position,
      shift: personnel.shift,
      img: personnel.img,
    } )
  }
  getPersonnelById(id: number): Observable<any>{
    return this.http.get(`${API_USER}/${id}`);
  }
  putPersonnel(personnel: Ipersonnel, id: number): Observable<any>{
    return this.http.put(`${API_USER}/${id}`, {
      username: personnel.name,
      phone:  personnel.phone,
      position: personnel.position,
      shift: personnel.shift,
      img: personnel.img,
    });
  }
  deletePersonnel(id: number): Observable<any>{
    return this.http.delete(`${API_USER}/${id}`);
  }
}