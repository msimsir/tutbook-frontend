import type { INavItem } from '@/types';

export const navElements: Array<INavItem> = [
  {
    name: 'Home',
    route: '/home'
  },
  {
    name: 'Login',
    route: '/login'
  },
  {
    name: 'Register',
    route: '/register'
  }
];

export const profileLocalStorage = 'profile';
