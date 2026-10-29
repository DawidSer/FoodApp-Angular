export type Restaurant = {
  id: number;
  name: string;
  description: string;
  cuisine: CuisineType;
  imageUrl?: string;
  rating: number;
  deliveryTimeMin: number;
  deliveryTimeMax: number;
  deliveryFee: number;
  minimumOrderValue: number;
  address: string;
  isActive: boolean;
};
// export type RestaurantWithoutId = Omit<Restaurant, 'id'|'address'>;

export type SortField = 'rating' | 'deliveryTimeMin' | 'deliveryFee';

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  isAvailable: boolean;
};

export type MenuCategory = {
  id: number;
  name: string;
  products: Product[];
};

export type Menu = MenuCategory[];

export type CuisineType =
  | 'italian'
  | 'polish'
  | 'chinese'
  | 'thai'
  | 'american'
  | 'indian'
  | 'japanese'
  | 'french'
  | 'mexican'
  | 'greek';
