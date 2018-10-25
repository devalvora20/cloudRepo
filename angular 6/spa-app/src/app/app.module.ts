import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routesArray } from '../spa/RouteConfig'
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from '../spa/HomeComponent';
import { AboutComponent } from '../spa/AboutComponent';
import { CareerComponent } from '../spa/CareerComponent';
import { NotFoundComponent } from '../spa/NotFoundComponent';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CareerComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routesArray)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
