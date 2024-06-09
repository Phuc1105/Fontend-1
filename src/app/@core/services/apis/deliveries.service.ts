import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { IDeliveries } from 'app/pages/delivery/list-deliveries/list-deliveries.component';

const API_DELIVERY = 'http://localhost:3000/api/deliveries';
@Injectable({
  providedIn: 'root'
})
export class DeliveriesService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }
  getDeliveries(): Observable<any> {
    return this.http.get(API_DELIVERY, {
      
    });
  }
  postDeliveries(delivery: any): Observable<any> {
    return this.http.post<any>(API_DELIVERY, {
      customer_name: delivery.customer_name,
      customer_phone: delivery.customer_phone,
      milkTea_flavor: delivery.milkTea_flavor,
      sugar: delivery.sugar,
      ice: delivery.ice,
      toppings: delivery.toppings
    });
  }
  getDeliveryById(id: number): Observable<any> {
    return this.http.get<any>(API_DELIVERY + '/' + id);
  }
  putDelivery(delivery: IDeliveries, id: number): Observable <any> {
    return this.http.put<any>(API_DELIVERY + '/' + id, {
      customer_name: delivery.customer_name,
      customer_phone: delivery.customer_phone,
      milkTea_flavor: delivery.milkTea_flavor,
      sugar: delivery.sugar,
      ice: delivery.ice,
      toppings: delivery.toppings
    });
  }
  deleteDelivery(id: number){
    return this.http.delete<any>(API_DELIVERY + '/' + id);
  }
 
}
