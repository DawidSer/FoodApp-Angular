import { Component, signal } from '@angular/core';
import { CuisineType, Restaurant } from '../../models/restaurant.model';
import { form, min, minLength, required, validate } from '@angular/forms/signals';

@Component({
  imports: [],
  selector: 'app-restaurant-form',
  styleUrl: './restaurant-form.scss',
  templateUrl: './restaurant-form.html',
})
export class RestaurantForm {
  // restaurant = signal<Partial<Restaurant>>({
  restaurant = signal<Omit<Restaurant, 'id'>>({
    name: '',
    description: '',
    cuisine: 'polish',
    imageUrl: '',
    deliveryTimeMin: 10,
    deliveryTimeMax: 30,
    deliveryFee: 10,
    minimumOrderValue: 20,
    isActive: true,
  });
  form = form(this.restaurant, (schema) => {
    required(schema.name);
    minLength(schema.description, 40, {
      error: { kind: 'minLength', message: 'Opis musi mieć min 40 znaków!' },
    });
    min(schema.deliveryTimeMin, 0);
    validate(schema.deliveryTimeMax, ({ value, valueOf }) => {
      if (value() < valueOf(schema.deliveryTimeMin)) {
        return {
          kind: 'invalidDateRange',
          message: 'End date must be after start date',
        };
      }
      return null;
    });
  });
}
