import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {ExpenseTrackerPage} from '../pages/expense-tracker/expenseTracker';
import {ExpenseTrackerService} from '../pages/expense-tracker/expenseTrackerService';
import {ExpenseDetailPage} from '../pages/expense-tracker/ExpenseDetail'
import { AuthenticateUserPage } from '../pages/expense-tracker/authenticateUser';
import { AuthenticateUserService } from '../pages/expense-tracker/authenticateUserService';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ExpenseTrackerPage,
    ExpenseDetailPage,
    AuthenticateUserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ExpenseTrackerPage,
    ExpenseDetailPage,
    AuthenticateUserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ExpenseTrackerService,
    AuthenticateUserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
