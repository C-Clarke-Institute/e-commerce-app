import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductCategory } from '../../../models/product.model';
import { ProductService } from '../../../features/products/services/product.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  @Output() categorySelected = new EventEmitter<string>();
  categories: ProductCategory[] = [];

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getCategories().subscribe((categories) => (this.categories = categories));
  }
}
