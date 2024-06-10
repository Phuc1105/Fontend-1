import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Icategories } from 'app/pages/categories/list-categories/list-categories.component';
import { API_CATEGORRIES } from 'app/@core/config/api-endpoint.config';

const API_CATEGORY = API_CATEGORRIES
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }
  getCategory(): Observable<any> {
    return this.http.get(API_CATEGORY);
  }
  postCategory(categories: any): Observable<any> {
    return this.http.post(API_CATEGORY, {
      name: categories.name,
      description: categories.description,
      status: categories.status,
      role: categories.role
    } )
  }
  getCategoryById(id: number): Observable<any>{
    return this.http.get(`${API_CATEGORY}/${id}`);
  }
  putCategory(categories: Icategories, id: number): Observable<any>{
    return this.http.put(`${API_CATEGORY}/${id}`, {
      name: categories.name,
      description: categories.description,
      status: categories.status,
      role: categories.role
    });
  }
  deleteCategory(id: number): Observable<any>{
    return this.http.delete(`${API_CATEGORY}/${id}`);
  }
}
