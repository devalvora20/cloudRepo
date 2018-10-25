import { Routes } from '@angular/router';
import{NotFoundComponent}from './NotFoundComponent';
import {HomeComponent} from './HomeComponent';
import {ProductListComponent} from './ProductListComponent';
import {ProductDetailComponent} from './ProductDetailComponent';

export const routesArray: Routes
    = [{ path: "home", component: HomeComponent }
        , { path: "productList",component:ProductListComponent}
        , { path: "productDetail/:id",component:ProductDetailComponent}
        , { path: "", redirectTo: "home", pathMatch: "full" }
        , {path:"**",component:NotFoundComponent}
    ];