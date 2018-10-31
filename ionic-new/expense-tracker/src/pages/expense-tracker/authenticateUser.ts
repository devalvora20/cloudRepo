import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExpenseTrackerService } from './expenseTrackerService';
import { AlertController } from 'ionic-angular';
import { AuthenticateUserService } from './authenticateUserService';
import { ExpenseTrackerPage } from './expenseTracker';
@Component({
    selector: 'page-ET',
    templateUrl: 'authenticateUser.html'
})
export class AuthenticateUserPage {
    username;
    password;
    constructor(public navCtrl: NavController, private _expenseTrackerService: ExpenseTrackerService, private alertCtrl: AlertController, private _authenticateUserService: AuthenticateUserService) {
    }
    authenticateUser() {
        if (this._authenticateUserService.authenticateUser(this.username, this.password)) {
            this.navCtrl.setRoot(ExpenseTrackerPage);
        }
        else {
            let alert = this.alertCtrl.create({
                title: 'Login Failed',
                subTitle: 'Invalid Credentials',
                buttons: ['Ok']
              });
              alert.present(); 
        }
    }
}