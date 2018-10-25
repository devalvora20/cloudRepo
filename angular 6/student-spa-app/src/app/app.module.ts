import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import {DisplayStudentComponent} from '../student-spa/DisplayStudentComponent';
import {AddStudentComponent} from '../student-spa/AddStudentComponent'
import {DeleteStudentComponent} from '../student-spa/DeleteStudentComponent'
import {StudentService} from '../student-spa/StudentService';
import{NotFoundComponent}from '../student-spa/NotFoundComponent';
import { EditStudentComponent } from '../student-spa/EditStudentComponent';
import {IsMale} from '../student-spa/IsMale';
import {GenderToColor} from '../student-spa/GenderToColor';
import {routesArray} from '../student-spa/routeConfig';

@NgModule({
  declarations: [
    AppComponent,
    DisplayStudentComponent,
    AddStudentComponent,
    NotFoundComponent,
    DeleteStudentComponent,
    EditStudentComponent,
    IsMale,
    GenderToColor
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routesArray)
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
