import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { WelcomeComponent } from './welcome.component';
import { StudentComponent } from '../student/student.component';
import {BlueButtonGame} from '../blue-button-game/blueButtonGame.component'
import {TwoWayComponent} from '../two-way-binding/twoWayBinding.component'
import {PrimeNumberComponent} from '../prime-number/primeNumber.component'
import {QuestionBankComponent} from '../question-bank/questionBank.component'
import {NumbersApiComponent} from '../numbers-api/numbersApi.component'
import {MultiwayBindingComponent} from '../multiway-binding-text-change/multiwaybinding.component'
import {StudentApiComponent} from '../student-api/studentApi.component'
import {ParentComponent} from '../parent/parent.component'
import {ToggleBtnComponent} from '../parent/toggleBtn.component'
import {StarComponent} from '../parent/star.component'
import {TimestampComponent} from '../parent/timestamp.component'

import {PrimeComponentService} from '../prime-number/PrimeComponentService'
import {NumbersApiService} from '../numbers-api/numbersApiService'
import {StudentApiService} from '../student-api/StudentApiService'
import {QuestionBankService} from '../question-bank/QuestionBankService'

import { GenderToColor } from '../student-api/GenderToColor'
import { IsMale } from '../student-api/IsMale';

import { ChartsModule } from 'ng2-charts';

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
    QuestionBankComponent,
    ParentComponent,
    ToggleBtnComponent,
    StarComponent,
    TimestampComponent,
    GenderToColor,
    IsMale
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [PrimeComponentService,NumbersApiService,StudentApiService,QuestionBankService],
  bootstrap: [WelcomeComponent]
})
export class AppModule { }
