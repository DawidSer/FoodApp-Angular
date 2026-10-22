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
  update() {}
  create() {}
  delete() {}

  private saveToLocalStorage(key: string, data: any) {
    const jsonData = JSON.stringify(this.data());
    localStorage.setItem(key, jsonData);
  }
  private getFromLocalStorage(key: string) {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : undefined;
  }
}
