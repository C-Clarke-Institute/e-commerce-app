import { computed, Injectable, signal } from '@angular/core';
import { CartItem, Product } from '../../../models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  readonly items = signal<CartItem[]>([]);
  readonly itemCount = computed(() =>
    this.items().reduce((total, item) => total + item.quantity, 0),
  );
  readonly subtotal = computed(() =>
    this.items().reduce((total, item) => total + item.product.price * item.quantity, 0),
  );

  getItems(): CartItem[] {
    return this.items();
  }
  getCount(): number {
    return this.itemCount();
  }
  getSubtotal(): number {
    return this.subtotal();
  }

  add(product: Product): void {
    this.items.update((items) => {
      const existing = items.find((item) => item.product.id === product.id);
      return existing
        ? items.map((item) =>
            item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
          )
        : [...items, { product, quantity: 1 }];
    });
  }

  updateQuantity(productId: number, quantity: number): void {
    this.items.update((items) =>
      items
        .map((item) => (item.product.id === productId ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    );
  }

  remove(productId: number): void {
    this.items.update((items) => items.filter((item) => item.product.id !== productId));
  }
}
