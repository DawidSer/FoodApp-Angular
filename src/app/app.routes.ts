import { Routes } from '@angular/router';
import { RestaurantDetails } from './components/restaurant-details/restaurant-details';
import { RestaurantList } from './components/restaurant-list/restaurant-list';
import { AdminRestaurantList } from './components/admin-restaurant-list/admin-restaurant-list';
import { RestaurantForm } from './components/restaurant-form/restaurant-form';
import { AdminPanel } from './components/admin-panel/admin-panel';
import { isAdminGuard } from './guards/is-admin-guard';
import { adminRoutes } from './admin.routes';

export const routes: Routes = [
  // { path: '', component: HomeComponent },
  {
    path: 'restaurants',
    // component: RestaurantList,
    loadComponent: () =>
      import('./components/restaurant-list/restaurant-list').then((m) => m.RestaurantList),
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
  // {
  //   path: 'admin/panel',
  //   canActivate: [isAdminGuard],
  //   component: AdminPanel,
  // },
  },
  {
    path: 'admin',
    component: AdminPanel,
    loadChildren: () => import('./admin.routes'),
    canActivateChild: [isAdminGuard],
    // children: adminRoutes,
  },
];
