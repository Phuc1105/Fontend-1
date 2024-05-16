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
        link: '/pages/dashboard',
      },
      {
        title: 'Danh Sách Khuyến Mãi',
        link: '/pages/dashboard',
      },
    ],
  },
  {
    title: 'Quản Lý Khách Hàng',
    icon: 'person-outline',
    children: [
      {
        title: 'Thêm Khách Hàng',
        link: '/pages/dashboard',
      },
      {
        title: 'Danh Sách Khách Hàng',
        link: '/pages/dashboard',
      },
    ],
  },
];
