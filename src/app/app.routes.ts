import { Routes } from '@angular/router';
import { RestaurantDetails } from './components/restaurant-details/restaurant-details';
import { RestaurantList } from './components/restaurant-list/restaurant-list';

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
];
