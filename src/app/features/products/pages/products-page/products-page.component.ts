import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../../models/product.model';
import { CartService } from '../../../cart/services/cart.service';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [FormsModule, ProductCardComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
})
export class ProductsPageComponent implements OnInit {
  @Input() products: Product[] = [];
  @Input() searchTerm = '';
  @Input() activeCategory = 'All products';
  @Output() productSelected = new EventEmitter<Product>();
  visibleProducts: Product[] = [];
  selectedCategory = 'All products';
  sortBy = 'featured';

  constructor(
    private readonly cart: CartService,
    private readonly productService: ProductService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.products;
      this.filterProducts();
    });
    this.route.queryParamMap.subscribe((params) => {
      this.searchTerm = params.get('search') ?? '';
      this.selectedCategory = params.get('category') ?? 'All products';
      this.filterProducts();
    });
  }
  filterProducts(): void {
    const term = this.searchTerm.toLowerCase().trim();
    this.visibleProducts = this.products.filter((product) => {
      const matchSearch =
        !term ||
        `${product.title} ${product.description} ${product.category}`.toLowerCase().includes(term);
      const matchCategory =
        this.selectedCategory === 'All products' ||
        product.category === this.selectedCategory ||
        this.category(product.category) === this.selectedCategory;
      return matchSearch && matchCategory;
    });
    if (this.sortBy === 'low') this.visibleProducts.sort((a, b) => a.price - b.price);
    if (this.sortBy === 'high') this.visibleProducts.sort((a, b) => b.price - a.price);
    if (this.sortBy === 'rating') this.visibleProducts.sort((a, b) => b.rating - a.rating);
  }
  category(value: string): string {
    return value.startsWith('womens') || value.startsWith('mens') || value === 'tops'
      ? 'Fashion'
      : value === 'sunglasses'
        ? 'Accessories'
        : 'Electronics';
  }
  addToCart(product: Product): void {
    this.cart.add(product);
  }
  chooseCategory(category: string): void {
    this.selectedCategory = category;
    this.filterProducts();
  }
}
