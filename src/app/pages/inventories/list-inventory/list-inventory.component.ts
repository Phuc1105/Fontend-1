import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { API_INVENTORIES } from 'app/@core/config/api-endpoint.config';
import { InventoriesService } from 'app/@core/services/apis/inventories.service';
import { DialogConfirmComponent } from 'app/@theme/components/dialog-confirm/dialog-confirm.component';


export interface Iinventories {
  id: string;
  name: string;
  product: string;
  quantity: string;
  total_price: string;
  status: string
}
@Component({
  selector: 'app-list-inventory.component',
  templateUrl: './list-inventory.component.html',
  styleUrls: ['./list-inventory.component.scss']
})
export class ListInventoryComponent {
  lisInventories: any;
  deleteNotification: boolean = false;
  lastPage: number = 0;
  currentPage: number = 0;
  apiUrl = API_INVENTORIES;
  constructor(
    private inventorie: InventoriesService,
    private dialogService: NbDialogService,
  ) {}
  ngOnInit(): void {
    this.getInventories();
  }
  getInventories(){
    this.inventorie.getInventory().subscribe(res =>{
      console.log(res);
      this.lisInventories = res.data;
      this.currentPage = res.meta.current_page;
      this.lastPage = res.meta.last_page;
    },err=>{
      console.error(err);
    })
  }
  getPage(res: any) {
      this.lisInventories = res.data;
      this.currentPage = res.meta.current_page;
      this.lastPage = res.meta.last_page;
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
    this.inventorie.deleteInventory(id).subscribe(
      res => {
        this.deleteNotification = true; 
        setTimeout(() => {
          this.deleteNotification = false;
        }, 1500);
        this.getInventories();
      },
      err => {
        console.error(err);
      }
    );
  }
}
