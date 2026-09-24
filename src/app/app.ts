import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AppShellComponent } from './layout/app-shell/app-shell.component';
import { CartService } from './features/cart/services/cart.service';
import {HomePageComponent} from "./features/home/pages/home-page/home-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppShellComponent, HomePageComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor(
    readonly cart: CartService,
    private readonly router: Router,
  ) {}
  navigate(page: string): void {
    this.router.navigate([page === 'home' ? '/' : `/${page}`]);
  }
  handleSearch(term: string): void {
    this.router.navigate(['/products'], { queryParams: { search: term || null } });
  }
  handleCategory(category: string): void {
    this.router.navigate(['/products'], {
      queryParams: { category: category || null },
    });
  }
  openCart(): void {
    this.router.navigate(['/cart']);
  }
}
