import { Routes } from '@angular/router';
import { RestaurantDetails } from './components/restaurant-details/restaurant-details';
import { RestaurantList } from './components/restaurant-list/restaurant-list';
import { AdminRestaurantList } from './components/admin-restaurant-list/admin-restaurant-list';
import { RestaurantForm } from './components/restaurant-form/restaurant-form';

export const routes: Routes = [
  // { path: '', component: HomeComponent },
  {
    path: 'restaurants',
    component: RestaurantList,
  },
  {
    path: 'restaurant/:id',
    component: RestaurantDetails,
  },
  {
    path: 'admin/restaurant/new',
    component: RestaurantForm,
  },
  {
    path: 'admin/restaurant/:id/edit',
    component: RestaurantForm,
  },
  {
    path: 'admin',
    component: AdminRestaurantList,
  },
];
