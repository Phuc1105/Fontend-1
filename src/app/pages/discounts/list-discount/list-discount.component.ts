import { Component } from '@angular/core';

@Component({
  selector: 'app-list-discount',
  templateUrl: './list-discount.component.html',
  styleUrls: ['./list-discount.component.scss']
})
export class ListDiscountComponent {
  promotions = [
    {
      id: 1,
      image: 'assets/images/discount1.png',
      title: 'Ưu đãi mua hàng',
      offer: 'Khi mua từ 2 sản phẩm trở lên được giảm 15% tổng hóa đơn.',
      startDate: '01/01/2024',
      endDate: '01/01/2025',
      status: 'Hoạt động'
    },
    {
      id: 2,
      image: 'assets/images/discount1.png',
      title: 'Khuyến mãi mùa hè',
      offer: 'Giảm giá 20% cho tất cả các sản phẩm.',
      startDate: '15/06/2024',
      endDate: '15/07/2024',
      status: 'Sắp bắt đầu'
    },
    {
      id: 3,
      image: 'assets/images/discount2.jpg',
      title: 'Ưu đãi thành viên',
      offer: 'Thành viên VIP được giảm 25% toàn bộ sản phẩm.',
      startDate: '01/03/2024',
      endDate: '01/04/2024',
      status: 'Đã kết thúc'
    }
  ];
}
