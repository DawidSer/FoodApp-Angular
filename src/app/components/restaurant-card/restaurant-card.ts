import { Component, input, model, signal } from '@angular/core';
import { form, FormField, min, minLength, required, validate } from '@angular/forms/signals';
import { Restaurant } from '../../models/restaurant.model';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormField, RouterLink],
  selector: 'app-restaurant-card',
  styleUrl: './restaurant-card.scss',
  templateUrl: './restaurant-card.html',
})
export class RestaurantCard {
  private description = signal('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  private canUpdate = signal(true);

  restaurant = model.required<Restaurant>();

  readonly form = form(this.restaurant, (schema) => {
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

  private updateRestaurantData() {
    console.log('Updating restaurant data...', this.restaurant());
  }
  // private onDescriptionChange(ev: InputEvent) {
  //   const target = ev.target as HTMLInputElement;
  //   console.log('Description changed', target.value);
  // }
  private onDescriptionChange(val: string) {
    console.log('Description changed', val);
  }
}
