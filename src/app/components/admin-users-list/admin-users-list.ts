import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-admin-users-list',
  styleUrl: './admin-users-list.scss',
  templateUrl: './admin-users-list.html',
})
export class AdminUsersList {}
