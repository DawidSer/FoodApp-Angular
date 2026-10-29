import { Component, computed, inject, input, model, numberAttribute, signal } from '@angular/core';
import { Restaurants } from '../../services/restaurants';

@Component({
  imports: [],
  selector: 'app-restaurant-details',
  styleUrl: './restaurant-details.scss',
  templateUrl: './restaurant-details.html',
})
export class RestaurantDetails {
  readonly id = input(0, { transform: numberAttribute });

  readonly restaurantService = inject(Restaurants);
  readonly restaurant = computed(() => {
    return this.restaurantService.getById(this.id());
  });

  readonly menu = computed(() => {
    const r = this.restaurant();
    return r ? this.restaurantService.getMenu(r.cuisine) : [];
  });
}
