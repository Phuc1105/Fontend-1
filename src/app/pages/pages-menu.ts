import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Main Dashboard',
    group: true,
  },
  {
    title: 'Main Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'User Management',
    icon: 'people-outline',
    link: '/pages/users',
  },
  {
    title: 'Product Management',
    icon: 'cube-outline',
    link: '/pages/product',
  },
  {
    title: 'Category Management',
    icon: 'grid-outline',
    link: '/pages/category',
  },
  {
    title: 'Inventory Management',
    icon: 'archive-outline',
    link: '/pages/inventory',
  },
];

