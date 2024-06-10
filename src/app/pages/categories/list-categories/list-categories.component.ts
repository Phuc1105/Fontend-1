import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { API_CATEGORRIES } from 'app/@core/config/api-endpoint.config';
import { CategoriesService } from 'app/@core/services/apis/categories.service';
import { DialogConfirmComponent } from 'app/@theme/components/dialog-confirm/dialog-confirm.component';


export interface Icategories {
  id: string;
  name: string;
  status: string;
  role: string;
  description: string
}
@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent {
  lisCategories: any;
  deleteNotification: boolean = false;
  lastPage: number = 0;
  currentPage: number = 0;
  apiUrl = API_CATEGORRIES;
  constructor(
    private categorie: CategoriesService,
    private dialogService: NbDialogService,
  ) {}
  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.categorie.getCategory().subscribe(res =>{
      console.log(res);
      this.lisCategories = res.data;
      this.currentPage = res.meta.current_page;
      this.lastPage = res.meta.last_page;
    },err=>{
      console.error(err);
    })
  }
  getPage(res: any) {
      this.lisCategories = res.data;
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
    this.categorie.deleteCategory(id).subscribe(
      res => {
        this.deleteNotification = true; 
        setTimeout(() => {
          this.deleteNotification = false;
        }, 1500);
        this.getCategories();
      },
      err => {
        console.error(err);
      }
    );
  }
}
