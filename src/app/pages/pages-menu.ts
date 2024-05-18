import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Bảng Điều Khiển Chính',
    icon: 'home-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Quản Lý Nhân Viên',
    icon: 'people-outline',
    children: [
      {
        title: 'Thêm Nhân Viên',
        link: '/pages/users/add-user',
      },
      {
        title: 'Danh Sách Nhân Viên',
        link: '/pages/users/list-users',
      },
    ],
  },
  {
    title: 'Quản Lý Sản Phẩm',
    icon: 'cube-outline',
    children: [
      {
        title: 'Thêm Sản Phẩm',
        link: '/pages/products/add-product',
      },
      {
        title: 'Danh Sách Sản Phẩm',
        link: '/pages/products/list-products',
      },
    ],
  },
  {
    title: 'Quản Lý Danh Mục',
    icon: 'grid-outline',
    children: [
      {
        title: 'Thêm Danh Mục',
        link: '/pages/categories/add-category',
      },
      {
        title: 'Danh Sách Danh Mục',
        link: '/pages/categories/list-categories',
      },
    ],
  },
  {
    title: 'Quản Lý Đơn Hàng',
    icon: 'archive-outline',
    children: [
      {
        title: 'Danh Sách Đơn Hàng',
        link: '/pages/inventories/list-inventory',
      },
    ]
  },
  {
    title: 'Thống Kê',
    icon: 'trending-up-outline',
    children: [
      {
        title: 'Thống Kê Doanh Thu',
        link: '/pages/dashboard',
      },
    ]
  },
  {
    title: 'Quản Lý Khuyến Mãi',
    icon: 'gift-outline',
    children: [
      {
        title: 'Thêm Khuyến Mãi',
        link: '/pages/discounts/add-discount',
      },
      {
        title: 'Danh Sách Khuyến Mãi',
        link: '/pages/discounts/list-discount',
      },
    ],
  },
  {
    title: 'Quản Lý Nhân Viên',
    icon: 'person-outline',
    children: [
      {
        title: 'Thêm nhân viên',
        link: '/pages/personnels/add-personnel',
      },
      {
        title: 'Danh sách nhân viên',
        link: '/pages/personnels/list-personnel',
      },
    ],
  },
  {
    title: 'Quản Lý Giao Hàng',
    icon: 'person-outline',
    children: [
      {
        title: 'Thêm Đơn Hàng',
        link: '/pages/delivery/add-delivery',
      },
      {
        title: 'Danh Sách Giao Hàng',
        link: '/pages/delivery/list-deliveries',
      },
    ],
  },
];
