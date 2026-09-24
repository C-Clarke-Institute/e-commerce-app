import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../../models/product.model';
import { CartService } from '../../../cart/services/cart.service';
import { ProductService } from '../../../products/services/product.service';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss',
})
export class ProductDetailPageComponent implements OnInit {
  @Input() product: Product | null = null;
  @Output() backToProducts = new EventEmitter<void>();
  quantity = 1;
  selectedImage = '';
  constructor(
    private readonly cart: CartService,
    private readonly productService: ProductService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}
  back(): void {
    this.router.navigate(['/products']);
  }
  ngOnInit(): void {
    this.backToProducts.subscribe(() => this.back());
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.productService.getProducts().subscribe((response) => {
        this.product = response.products.find((item) => item.id === id) ?? null;
        this.selectedImage = this.product?.thumbnail ?? '';
      });
    });
  }
  addToCart(): void {
    if (!this.product) return;
    for (let index = 0; index < this.quantity; index++) this.cart.add(this.product);
  }
}
