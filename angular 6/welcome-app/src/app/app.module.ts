import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StudentComponent } from '../student/student.component';
import {BlueButtonGame} from '../blue-button-game/blueButtonGame.component'
import {TwoWayComponent} from '../two-way-binding/twoWayBinding.component'
import {PrimeNumberComponent} from '../prime-number/primeNumber.component'
import { WelcomeComponent } from './welcome.component';
import {PrimeComponentService} from '../prime-number/PrimeComponentService';
import {NumbersApiComponent} from '../numbers-api/numbersApi.component'
import {NumbersApiService} from '../numbers-api/numbersApiService'
import {MultiwayBindingComponent} from '../multiway-binding-text-change/multiwaybinding.component'
import {StudentApiComponent} from '../student-api/studentApi.component'
import {StudentApiService} from '../student-api/StudentApiService';
import { GenderToColor } from '../student-api/GenderToColor';
import { IsMale } from '../student-api/IsMale';

@NgModule({
  declarations: [
    WelcomeComponent,
    StudentComponent,
    BlueButtonGame,
    TwoWayComponent,
    PrimeNumberComponent,
    NumbersApiComponent,
    MultiwayBindingComponent,
    StudentApiComponent,
    GenderToColor,
    IsMale
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PrimeComponentService,NumbersApiService,StudentApiService],
  bootstrap: [WelcomeComponent]
})
export class AppModule { }
