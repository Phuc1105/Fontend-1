import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

const API_Product= 'http://localhost:3000/api/products'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }
  getProducts(): Observable<any>{
    return this.http.get(API_Product);
  }
  postProducts(product: any): Observable<any>{
    return this.http.post(API_Product,{
      product_name: product.product_name,
      image: product.image,
      price: product.price,
      status: product.status,
      category: product.category
    })
  }
}
