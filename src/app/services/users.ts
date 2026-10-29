import { Service } from '@angular/core';

@Service()
export class Users {
  // private loggedUsers: User | undefined = undefined;
  private loggedUsers: any = undefined;
  login() {}
  logout() {}

  register() {}
  update() {}
  delete() {}

  getUser(id: string) {}
  getUsersList() {}

  isAdminLoggedIn() {
    // return this.loggedUsers?.role === 'admin';
    return true;
  }
}
