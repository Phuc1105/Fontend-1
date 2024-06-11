import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { API_DISCOUNTS } from 'app/@core/config/api-endpoint.config';

@Component({
  selector: 'app-list-discount',
  templateUrl: './list-discount.component.html',
  styleUrls: ['./list-discount.component.scss']
})
export class ListDiscountComponent {
  lisDiscounts: Idiscount[] = [];
  originalDiscounts: Idiscount[] = [];
  deleteNotification: boolean = false;
  lastPage: number = 0;
  currentPage: number = 0;
  apiUrl = API_DISCOUNTS;
  private _listFilter: string = '';
  constructor(
    private discount: DiscountsService,
    private dialogService: NbDialogService,
  ) { }
  ngOnInit(): void {
    this.getDiscounts();
  }
  getDiscounts() {
    this.discount.getDiscount().subscribe(res => {
      console.log(res);
      this.lisDiscounts = res.data;
      this.originalDiscounts = res.data;
      this.currentPage = res.meta.current_page;
      this.lastPage = res.meta.last_page;
    }, err => {
      console.error(err);
    })
  }
  getPage(res: any) {
    this.lisDiscounts = res.data;
    this.currentPage = res.meta.current_page;
    this.lastPage = res.meta.last_page;
  }
  
  openDeleteDialog(id: number): void {
    this.dialogService.open(DialogConfirmComponent, {
      context: {
        title: 'Xác nhận xóa',
        content: 'Bạn có chắc chắn muốn xóa sự kiện này không?'
      }
    }).onClose.subscribe(confirmed => {
      if (confirmed) {
        this.btnDelete(id);
      } else {
      }
    });
  }
  btnDelete(id: number): void {
    this.discount.deleteDiscount(id).subscribe(
      res => {
        this.deleteNotification = true;
        setTimeout(() => {
          this.deleteNotification = false;
        }, 1500);
        this.getDiscounts();
      },
      err => {
        console.error(err);
      }
    );
  }
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.lisDiscounts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.originalDiscounts;
  }

  performFilter(filterBy: string): Idiscount[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.originalDiscounts.filter((discount: Idiscount) =>
      discount.nameDiscount.toLocaleLowerCase().includes(filterBy)
    );
  }
}
