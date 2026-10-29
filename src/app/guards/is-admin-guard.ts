import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Users } from '../services/users';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const users = inject(Users);
  return users.isAdminLoggedIn(); // boolean, Promise<boolean>, Observable<boolean>
};
