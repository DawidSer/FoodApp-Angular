import { Service, signal } from '@angular/core';
import data from '../../data/restaurants.json';
import { Restaurant } from '../models/restaurant.model';

@Service()
export class Restaurants {
  private data = signal(data as Restaurant[]);
  getAll() {
    return this.data;
  }
  getById(id: number) {
    console.log('[restaurant service] getById', id);
  }
}
