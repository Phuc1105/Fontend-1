
import { Component } from '@angular/core';
import { ProductService } from 'app/@core/services/apis/products.service';

export interface Products{
  id: string;
  product_name: string;
  image: string;
  price: string;
  status: string;
  category: string;
}
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  listProducts: any;
  lastProduct: number=0;
  currentProduct : number = 0;
  apiUrl = 'http://localhost:3000/api/products'
  constructor(
    private product: ProductService
  ) {}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.product.getProducts().subscribe(res =>{
      console.log(res);
      // const data = res.data;
      this.listProducts = res;
      this.currentProduct = res.meta.current_page;
      this.lastProduct = res.meta.last_page;
    })
  }
  getPage(res:any){
    this.listProducts = res.data;
    console.log(res);
    
  }
}
