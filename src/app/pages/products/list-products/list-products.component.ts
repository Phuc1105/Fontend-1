
import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { API_PRODUCTS } from 'app/@core/config/api-endpoint.config';
import { ProductService } from 'app/@core/services/apis/products.service';
import { DialogConfirmComponent } from 'app/@theme/components/dialog-confirm/dialog-confirm.component';

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
  lastPage: number=0;
  currentPage : number = 0;
  deleteNotification: boolean = false;
  apiUrl = API_PRODUCTS
  constructor(
    private product: ProductService,
    private dialogService: NbDialogService,
  ) {}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.product.getProducts().subscribe(res =>{
      console.log(res);
      // const data = res.data;
      this.listProducts = res.data;
      this.currentPage = res.meta.current_page;
      this.lastPage = res.meta.last_page;
    })
  }
  getPage(res:any){
    this.listProducts = res.data;
    this.currentPage = res.meta.current_page;
    this.lastPage = res.meta.last_page;
    console.log(res);
    
  }
  openDeleteDialog(id: number): void {
    this.dialogService.open(DialogConfirmComponent, {
      context: {
        title: 'Xác nhận xóa',
        content: 'Bạn có chắc chắn muốn xóa đơn hàng này không?'
      }
    }).onClose.subscribe(confirmed => {
      if (confirmed) {
        this.btnDelete(id);
      } else {
      }
    });
  }
  btnDelete(id: number): void {
    this.product.deleteProduct(id).subscribe(
      res => {
        this.deleteNotification = true; 
        setTimeout(() => {
          this.deleteNotification = false;
        }, 1500);
        this.getProducts();
      },
      err => {
        console.error(err);
      }
    );
  }
}
