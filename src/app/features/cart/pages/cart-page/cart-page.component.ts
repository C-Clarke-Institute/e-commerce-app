import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CartItem } from '../../../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent {
  constructor(readonly cart: CartService) {}
  get items(): CartItem[] {
    return this.cart.getItems();
  }
  update(item: CartItem, change: number): void {
    this.cart.updateQuantity(item.product.id, item.quantity + change);
  }
  remove(item: CartItem): void {
    this.cart.remove(item.product.id);
  }
}
