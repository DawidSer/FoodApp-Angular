import { Restaurants } from '../../services/restaurants';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-admin-restaurant-list',
  styleUrl: './admin-restaurant-list.scss',
  templateUrl: './admin-restaurant-list.html',
})
export class AdminRestaurantList {
  readonly restaurantService = inject(Restaurants);
  readonly restaurants = this.restaurantService.getAll();

  onDeactivate(id: number): void {
    const restaurant = this.restaurantService.getById(id);
    if (!restaurant) {
      return;
    }
    const confirmed = confirm(`Dezaktywować restaurację "${restaurant.name}"?`);
    if (confirmed) {
      this.restaurantService.deactivate(id);
    }
  }
}
