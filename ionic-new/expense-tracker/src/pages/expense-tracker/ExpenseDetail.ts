import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExpenseTrackerService } from './expenseTrackerService';
import { NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ExpenseTrackerPage } from './expenseTracker';
@Component({
    selector: 'page-ET',
    templateUrl: 'ExpenseDetail.html'
})
export class ExpenseDetailPage {
    description: String;
    cost: number;
    category: any;
    date: String;
    id: number;
    isEdit: boolean = false;
    isValidate: boolean = false;
    expenses: any[];
    expense: any;
    constructor(public navCtrl: NavController, private _expenseTrackerService: ExpenseTrackerService, private navParams: NavParams, private alertCtrl: AlertController) {
        this.id = navParams.get("expenseId");
        this.isEdit = false;
        console.log("Expense Detail constructor");
        if (this.id != null) {
            this.isEdit = true;
            this.isValidate = true;
            this.getExpense();
        }
    }
    clearExpense() {
        if (this.isEdit)
            this.getExpense();
        else {
            this.description = null;
            this.cost = null;
            this.category = null;
            this.date = null;
        }
    }

    getExpense() {
        this.expense = this._expenseTrackerService.getExpense(this.id);
        this.description = this.expense.description;
        this.cost = this.expense.cost;
        this.category = this.expense.category;
        this.date = this.expense.date;
    }
    addExpense() {
        if (this.isEdit)
            this._expenseTrackerService.updateExpense(this.id, this.description, this.cost, this.category, this.date);
        else
            this._expenseTrackerService.addExpense(this.description, this.cost, this.category, this.date);
        this.navCtrl.setRoot(ExpenseTrackerPage);
    }

    deleteExpense() {
        let alert = this.alertCtrl.create({
            title: 'Confirm delete',
            message: 'Are you sure you want to delete this expense?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: () => {
                        this._expenseTrackerService.deleteExpense(this.id);
                        this.navCtrl.setRoot(ExpenseTrackerPage);
                    }
                }
            ]
        });
        alert.present();
    }

}