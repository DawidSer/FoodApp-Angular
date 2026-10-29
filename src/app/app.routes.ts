import { Routes } from '@angular/router';
import { RestaurantDetails } from './components/restaurant-details/restaurant-details';
import { AdminPanel } from './components/admin-panel/admin-panel';
import { isAdminGuard } from './guards/is-admin-guard';

export const routes: Routes = [
  // { path: '', component: HomeComponent },
  {
    path: 'restaurants',
    loadComponent: () =>
      import('./components/restaurant-list/restaurant-list').then((m) => m.RestaurantList),
  },
  {
    path: 'restaurant/:id',
    component: RestaurantDetails,
  },
  {
    path: 'admin',
    component: AdminPanel,
    canActivateChild: [isAdminGuard],
    loadChildren: () => import('./admin.routes'),
  },
];
