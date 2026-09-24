import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { CartService } from '../../../cart/services/cart.service';
import { ProductService } from '../../../products/services/product.service';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  products: Product[] = [];
  visibleProducts: Product[] = [];
  selectedCategory = 'All products';
  searchTerm = '';

  constructor(
    private readonly productService: ProductService,
    private readonly cart: CartService,
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.products;
      this.filterProducts();
    });
  }

  filterProducts(): void {
    const term = this.searchTerm.toLowerCase().trim();
    this.visibleProducts = this.products.filter((product) => {
      const matchesSearch =
        !term ||
        `${product.title} ${product.description} ${product.category}`.toLowerCase().includes(term);
      const matchesCategory =
        this.selectedCategory === 'All products' ||
        this.toCategory(product.category) === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }

  setCategory(category: string): void {
    this.selectedCategory = category;
    this.filterProducts();
  }
  setSearch(term: string): void {
    this.searchTerm = term;
    this.filterProducts();
  }
  addToCart(product: Product): void {
    this.cart.add(product);
  }
  toCategory(category: string): string {
    return category.startsWith('womens') || category === 'tops'
      ? 'Fashion'
      : category.startsWith('mens')
        ? 'Fashion'
        : category === 'sunglasses'
          ? 'Accessories'
          : 'Electronics';
  }
}
