import { Component } from '@angular/core';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent {
  categories = [
    { id: 1, name: 'Trà trái cây tươi', description: 'Ngon Quá Ngon Quá', status: 'Kích hoạt', trend: true, image: 'assets/images/maxresdefault.jpg' },
    { id: 2, name: 'Trà sữa 3 vị', description: 'Độc lạ', status: 'Không kích hoạt', trend: false, image: 'assets/images/category2.jpg' },
    { id: 3, name: 'Matcha', description: 'Ngon', status: 'Kích hoạt', trend: true, image: 'assets/images/category3.jpg' }
  ];
  
}
