import { AdminPanel } from './components/admin-panel/admin-panel';
import { AdminUserDetails } from './components/admin-user-details/admin-user-details';
import { AdminUsersList } from './components/admin-users-list/admin-users-list';

export const adminRoutes = [
  {
    path: 'users',
    component: AdminUsersList,
  },
  {
    path: 'user/:id',
    component: AdminUserDetails,
  },
  // {
  //   path: 'user/new',
  //   component: AdminNewUser,
  // },
];

export default adminRoutes;
