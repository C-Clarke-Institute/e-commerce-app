import { Routes } from '@angular/router';
import {HomePageComponent} from "./features/home/pages/home-page/home-page.component";
import {ProductsPageComponent} from "./features/products/pages/products-page/products-page.component";
import {CartPageComponent} from "./features/cart/pages/cart-page/cart-page.component";
import {AdminPage} from "./features/admin/pages/admin-page/admin-page";
import {AdminDashboardPage} from "./features/admin/pages/admin-dashboard-page/admin-dashboard-page";
import {AdminProfilePage} from "./features/admin/pages/admin-profile-page/admin-profile-page";
import {AdminSettingPage} from "./features/admin/pages/admin-setting-page/admin-setting-page";
import {AdminProfileEditPage} from "./features/admin/pages/admin-profile-edit-page/admin-profile-edit-page";

export const routes: Routes = [
    { path: '' , component: HomePageComponent },
    { path: 'products', component: ProductsPageComponent },
    { path: 'cart', component: CartPageComponent },
    {
        path: 'admin',
        component: AdminPage ,
        children: [
            { path: 'dashboard', component: AdminDashboardPage },
            {
                path: 'profile',
                component: AdminProfilePage,
                children: [
                    {
                        path: 'edit', component: AdminProfileEditPage, },
                ]
            },
            { path: 'setting', component: AdminSettingPage }
        ]
    },
];
