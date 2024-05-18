import { Component } from '@angular/core';

@Component({
  selector: 'app-list-personnel',
  templateUrl: './list-personnel.component.html',
  styleUrls: ['./list-personnel.component.scss']
})
export class ListPersonnelComponent {
  employees = [
    {
      id: 1,
      image: 'assets/images/Zinzu Chan Lee.jpg',
      name: 'Nhân viên 1',
      phone: '012345678',
      position: 'Nhân viên',
      status: 'Hoạt động',
      shift: 'Ca 2 (9h-1h)'
    },
    {
      id: 2,
      image: 'assets/images/nhanvien2.jpg',
      name: 'Nhân viên 2',
      phone: '098765432',
      position: 'Nhân viên',
      status: 'Hoàn thành',
      shift: 'Ca 1 (6h30-9h)'
    },
    {
      id: 3,
      image: 'assets/images/nhanvien2.jpg',
      name: 'Nhân viên 3',
      phone: '098765432',
      position: 'Nhân viên',
      status: 'Chưa làm',
      shift: 'Ca 3 (1h-4h)'
    }
  ];
}
