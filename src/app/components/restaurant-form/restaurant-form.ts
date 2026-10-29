import {
  Component,
  OnInit,
  computed,
  inject,
  input,
  numberAttribute,
  signal,
} from '@angular/core';
import {
  FormField,
  form,
  min,
  minLength,
  required,
  validate,
} from '@angular/forms/signals';
import { Router, RouterLink } from '@angular/router';
import { CuisineType, Restaurant } from '../../models/restaurant.model';
import { Restaurants } from '../../services/restaurants';

@Component({
  imports: [FormField, RouterLink],
  selector: 'app-restaurant-form',
  styleUrl: './restaurant-form.scss',
  templateUrl: './restaurant-form.html',
})
export class RestaurantForm implements OnInit {
  /** Route param. `0` = create mode; a real id = edit mode. */
  readonly id = input(0, { transform: numberAttribute });
  readonly isEdit = computed(() => this.id() > 0);

  private readonly restaurantService = inject(Restaurants);
  private readonly router = inject(Router);

  readonly cuisines: CuisineType[] = [
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

  /** The form model. `id` is 0 until we load/create a real one. */
  readonly restaurant = signal<Restaurant>({
    id: 0,
    name: '',
    description: '',
    rating: 0,
    cuisine: 'polish',
    imageUrl: '',
    deliveryTimeMin: 10,
    deliveryTimeMax: 30,
    deliveryFee: 10,
    minimumOrderValue: 20,
    address: '',
    isActive: true,
  });

  readonly form = form(this.restaurant, (schema) => {
    required(schema.name);
    required(schema.address);
    minLength(schema.description, 40, {
      error: { kind: 'minLength', message: 'Opis musi mieć min 40 znaków!' },
    });
    min(schema.deliveryTimeMin, 1, {
      error: { kind: 'min', message: 'Minimalny czas dostawy to 1 minuta.' },
    });
    min(schema.deliveryFee, 0, {
      error: { kind: 'min', message: 'Koszt dostawy nie może być ujemny.' },
    });
    min(schema.minimumOrderValue, 0, {
      error: {
        kind: 'min',
        message: 'Minimalna wartość zamówienia nie może być ujemna.',
      },
    });
    validate(schema.deliveryTimeMax, ({ value, valueOf }) => {
      if (value() < valueOf(schema.deliveryTimeMin)) {
        return {
          kind: 'invalidTimeRange',
          message: 'Maksymalny czas dostawy nie może być krótszy niż minimalny!',
        };
      }
      return null;
    });
  });

  ngOnInit(): void {
    if (!this.isEdit()) {
      return;
    }
    const existing = this.restaurantService.getById(this.id());
    if (existing) {
      this.restaurant.set(existing);
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.form().invalid()) {
      return;
    }
    const value = this.restaurant();
    if (this.isEdit()) {
      this.restaurantService.update({ ...value, id: this.id() });
    } else {
      this.restaurantService.create(value);
    }
    this.router.navigate(['/admin']);
  }
}
