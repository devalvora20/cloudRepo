import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExpenseTrackerService } from './expenseTrackerService';
import {ExpenseDetailPage} from './ExpenseDetail'
import { MyApp } from 'D:/LocalGitRepo/ionic/expense-tracker/src/app/app.component';

import { AuthenticateUserService } from './authenticateUserService';

@Component({
    selector: 'page-ET',
    templateUrl: 'expenseTracker.html'
})
export class ExpenseTrackerPage {
    expenses: any[];
    constructor(public navCtrl: NavController, private _expenseTrackerService: ExpenseTrackerService,private _authenticateUserService:AuthenticateUserService) {
        
            this.expenses = _expenseTrackerService.getExpenses();
        
    }

    logOut(){
        this._authenticateUserService.logOut();
        this.navCtrl.setRoot(MyApp);
    }

    addExpense(){
        this.navCtrl.push(ExpenseDetailPage);
    }

    editExpense(id){
        this.navCtrl.push(ExpenseDetailPage,{expenseId:id});
    }
}
