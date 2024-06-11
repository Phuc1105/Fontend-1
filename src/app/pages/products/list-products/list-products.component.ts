import { Component } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  listProducts: Products[] = [];
  originalProducts: Products[] = [];
  lastPage: number=0;
  currentPage : number = 0;
  deleteNotification: boolean = false;
  apiUrl = API_PRODUCTS
  private _listFilter: string = ''; 
  constructor(
    private product: ProductService,
    private dialogService: NbDialogService,
  ) {}  
  ngOnInit(): void {
    this.getProducts();
  }
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.listProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.originalProducts;
  }

  performFilter(filterBy: string): Products[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.originalProducts.filter((product: Products) =>
      product.product_name.toLocaleLowerCase().includes(filterBy)
    );
  }
  getProducts(){
    this.product.getProducts().subscribe(res =>{
      console.log(res);
      this.listProducts = res.data;
      this.originalProducts = res.data;
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
