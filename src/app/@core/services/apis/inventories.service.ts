import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Iinventories } from 'app/pages/inventories/list-inventory/list-inventory.component';
import { API_INVENTORIES } from 'app/@core/config/api-endpoint.config';

const API_INVENTORY = API_INVENTORIES
@Injectable({
  providedIn: 'root'
})
export class InventoriesService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }
  getInventory(): Observable<any> {
    return this.http.get(API_INVENTORY);
  }
  postInventory(inventories: any): Observable<any> {
    return this.http.post(API_INVENTORY, {
      name: inventories.name,
      product: inventories.product,
      quantity: inventories.quantity,
      total_price: inventories.total_price,
      status: inventories.status
    } )
  }
  getInventoryById(id: number): Observable<any>{
    return this.http.get(`${API_INVENTORY}/${id}`);
  }
  putInventory(inventories: Iinventories , id: number): Observable<any>{
    return this.http.put(`${API_INVENTORY}/${id}`, {
      name: inventories.name,
      product: inventories.product,
      quantity: inventories.quantity,
      total_price: inventories.total_price,
      status: inventories.status
    });
  }
  deleteInventory(id: number): Observable<any>{
    return this.http.delete(`${API_INVENTORY}/${id}`);
  }
}
