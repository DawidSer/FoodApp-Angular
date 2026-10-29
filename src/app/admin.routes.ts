import { Routes } from '@angular/router';
import { AdminRestaurantList } from './components/admin-restaurant-list/admin-restaurant-list';
import { RestaurantForm } from './components/restaurant-form/restaurant-form';
import { AdminUsersList } from './components/admin-users-list/admin-users-list';
import { AdminUserDetails } from './components/admin-user-details/admin-user-details';

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
    path: 'user/:id',
    component: AdminUserDetails,
  },
];

export default adminRoutes;
