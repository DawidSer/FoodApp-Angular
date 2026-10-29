import { Routes } from '@angular/router';
import { AdminRestaurantList } from './components/admin-restaurant-list/admin-restaurant-list';
import { RestaurantForm } from './components/restaurant-form/restaurant-form';
import { AdminUsersList } from './components/admin-users-list/admin-users-list';
import { AdminUserForm } from './components/admin-user-form/admin-user-form';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminRestaurantList,
  },
  {
    path: 'restaurant/new',
    component: RestaurantForm,
  },
  {
    path: 'restaurant/:id/edit',
    component: RestaurantForm,
  },
  {
    path: 'users',
    component: AdminUsersList,
  },
  {
    path: 'users/new',
    component: AdminUserForm,
  },
];

export default adminRoutes;
