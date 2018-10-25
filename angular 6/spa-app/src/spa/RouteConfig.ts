import { Routes } from '@angular/router';
import { HomeComponent } from './HomeComponent';
import { AboutComponent } from './AboutComponent';
import { CareerComponent } from './CareerComponent';
import { NotFoundComponent } from './NotFoundComponent';

export const routesArray: Routes = [{ path: "home", component: HomeComponent }
                                , { path: 'about/:developer', component: AboutComponent }
                                , { path: "career", component: CareerComponent }
                                , { path: "", redirectTo: "home", pathMatch: "full" }
                                , { path:"**" , component: NotFoundComponent }
                            ];