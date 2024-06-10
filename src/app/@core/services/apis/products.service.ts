import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { API_PRODUCTS } from 'app/@core/config/api-endpoint.config';
import { Products } from 'app/pages/products/list-products/list-products.component';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }
  getProducts(): Observable<any>{
    return this.http.get(API_PRODUCTS);
  }
  postProducts(product: any): Observable<any>{
    return this.http.post(API_PRODUCTS,{
      product_name: product.product_name,
      image: product.image,
      price: product.price,
      status: product.status,
      category: product.category
    })
  }
  getProductById(id: number): Observable<any> {
    return this.http.get(`${API_PRODUCTS}/${id}`)
  }
  putProduct(product: Products, id: number): Observable<any>{
    return this.http.put(`${API_PRODUCTS}/${id}`, {
      product_name: product.product_name,
      image:  product.image,
      price: product.price,
      status: product.status,
      category: product.category,
    });
  }

  deleteProduct(id: number): Observable<any>{
    return this.http.delete(`${API_PRODUCTS}/${id}`)
  }
}
