import { Service, signal } from '@angular/core';
import data from '../../data/restaurants.json';
import menuData from '../../data/menus.json';
import { CuisineType, MenuCategory, Restaurant } from '../models/restaurant.model';

@Service()
export class Restaurants {
  private data = signal(data as Restaurant[]);
  private menus = menuData as Record<CuisineType, MenuCategory[]>;

  getAll() {
    return this.data;
  }
  getById(id: number): Restaurant | undefined {
    return this.data().find((x) => x.id === id);
  }
  getMenu(cuisine: CuisineType): MenuCategory[] {
    return this.menus[cuisine] ?? [];
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
