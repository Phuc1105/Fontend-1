// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { AuthService } from './auth.service';
// import { API_DISCOUNTS } from 'app/@core/config/api-endpoint.config';
// import { Observable } from 'rxjs';
// import { Idiscount } from 'app/pages/discounts/list-discount/list-discount.component';

// @Injectable({
//   providedIn: 'root'
// })
// export class DiscountsService {
//   constructor(
//     private http: HttpClient,
//     private authService: AuthService,
//   ) { }
//   getDiscount(): Observable<any> {
//     return this.http.get(API_DISCOUNTS);
//   }
//   postDiscount(discount: any): Observable<any> {
//     return this.http.post(API_DISCOUNTS, {
//       nameDiscount: discount.nameDiscount,
//       startDate:  discount.startDate,
//       endDate: discount.endDate,
//       img: discount.img,
//       status: discount.status,
//       contentDiscount: discount.contentDiscount,
//     } )
//   }
//   getDiscountById(id: number): Observable<any>{
//     return this.http.get(`${API_DISCOUNTS}/${id}`);
//   }
//   putDiscount(discount: Idiscount, id: number): Observable<any>{
//     return this.http.put(`${API_DISCOUNTS}/${id}`, {
//       nameDiscount: discount.nameDiscount,
//       startDate:  discount.startDate,
//       endDate: discount.endDate,
//       img: discount.img,
//       status: discount.status,
//       contentDiscount: discount.contentDiscount,
//     });
//   }
//   deleteDiscount(id: number): Observable<any>{
//     return this.http.delete(`${API_DISCOUNTS}/${id}`);
//   }
// }
