import { Component, computed, inject, input, model, signal } from '@angular/core';
import { Restaurants } from '../../services/restaurants';

@Component({
  imports: [],
  selector: 'app-restaurant-details',
  styleUrl: './restaurant-details.scss',
  templateUrl: './restaurant-details.html',
})
export class RestaurantDetails {
  readonly id = input<number>();

  readonly restaurantService = inject(Restaurants);
  readonly restaurant = computed(() => {
    return this.restaurantService.getById(this.id() as number);
  });
}
