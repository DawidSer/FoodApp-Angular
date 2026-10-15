import { Component, inject, signal } from '@angular/core';
import { RestaurantCard } from '../restaurant-card/restaurant-card';
import { Restaurant } from '../../models/restaurant.model';
import { Restaurants } from '../../services/restaurants';

@Component({
  imports: [RestaurantCard],
  selector: 'app-restaurant-list',
  styleUrl: './restaurant-list.scss',
  templateUrl: './restaurant-list.html',
})
export class RestaurantList {
  restaurantsService = inject(Restaurants);
  readonly restaurants = this.restaurantsService.getAll();

  onSearch() {
    this.restaurants.set([]);
    // this.restaurants.update((current) => newDate);
  }
}
