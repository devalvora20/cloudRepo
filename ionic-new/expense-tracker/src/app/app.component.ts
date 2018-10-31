import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthenticateUserService } from '../pages/expense-tracker/authenticateUserService';
import { AuthenticateUserPage } from '../pages/expense-tracker/authenticateUser';
import {ExpenseTrackerPage} from '../pages/expense-tracker/expenseTracker';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private _authenticateUserService:AuthenticateUserService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if(_authenticateUserService.isLoggedIn()){
        this.rootPage = ExpenseTrackerPage;
      }
      else{
        this.rootPage = AuthenticateUserPage;
      }
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

