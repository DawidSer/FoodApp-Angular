import { CuisineType, SortField } from './../../models/restaurant.model';
import { Component, computed, inject, signal } from '@angular/core';
import { RestaurantCard } from '../restaurant-card/restaurant-card';
import { Restaurants } from '../../services/restaurants';


@Component({
  imports: [RestaurantCard],
  selector: 'app-restaurant-list',
  styleUrl: './restaurant-list.scss',
  templateUrl: './restaurant-list.html',
})
export class RestaurantList {

  restaurantsService = inject(Restaurants);

  readonly search = signal('');
  readonly cuisine = signal<CuisineType | ''>('');
  readonly onlyActive = signal(false);
  readonly sortBy = signal<SortField>('deliveryFee');

  readonly cuisineOptions: CuisineType[] = [
    'italian',
    'polish',
    'chinese',
    'thai',
    'american',
    'indian',
    'japanese',
    'french',
    'mexican',
    'greek',
  ];
  readonly sortOptions = [
    { value: 'rating', label: 'Ocena' },
    { value: 'deliveryTimeMin', label: 'Czas dostawy' },
    { value: 'deliveryFee', label: 'Koszt dostawy' },
  ] as const;

  readonly restaurants = computed(() =>
    this.restaurantsService.getAll()().filter(
      (r) => (r.name.trim().toLowerCase().includes(this.search().trim().toLowerCase())) &&
      (this.cuisine() === '' || r.cuisine === this.cuisine()) &&
      (!this.onlyActive() || r.isActive)
    ).sort(
      (a, b) => a[this.sortBy()] - b[this.sortBy()]
    )
  );

  onSearch(val: string) {
    this.search.set(val);
  }

  onCuisineChange(val: string){
    this.cuisine.set(val as CuisineType | '');
  }

  onOnlyActiveChange(val: boolean) {
    this.onlyActive.set(val);
  }

  onSortChange(val: string){
    this.sortBy.set(val as SortField);
  }

  onReset() {
    this.search.set('');
    this.cuisine.set('');
    this.onlyActive.set(false);
    this.sortBy.set('deliveryFee');
  }

}
