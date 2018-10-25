import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {TooltipModule} from 'ng2-tooltip-directive';

import { AppComponent } from './app.component';
import{NotFoundComponent}from '../acme/NotFoundComponent';
import {HomeComponent} from '../acme/HomeComponent';
import {ProductListComponent} from '../acme/ProductListComponent';
import {StarComponent} from '../acme/StarComponent';
import {ProductDetailComponent} from '../acme/ProductDetailComponent';

import {ProductDataService} from '../acme/ProductDataService';

import {routesArray} from '../acme/routeConfig';
import {PricePipe} from '../acme/PricePipe'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ProductListComponent,
    StarComponent,
    ProductDetailComponent,
    PricePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TooltipModule,
    RouterModule.forRoot(routesArray)
  ],
  providers: [ProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
