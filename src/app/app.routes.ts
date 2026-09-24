import { Routes } from '@angular/router';
import {HomePageComponent} from "./features/home/pages/home-page/home-page.component";
import {ProductsPageComponent} from "./features/products/pages/products-page/products-page.component";
import {CartPageComponent} from "./features/cart/pages/cart-page/cart-page.component";

export const routes: Routes = [
    { path: '' , component: HomePageComponent },
    { path: 'products', component: ProductsPageComponent },
    { path: 'cart', component: CartPageComponent },
];
