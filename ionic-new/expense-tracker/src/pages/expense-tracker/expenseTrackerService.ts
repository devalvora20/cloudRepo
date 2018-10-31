import { Expense } from "./Expense";
import { v4 as uuid } from 'uuid';

export class ExpenseTrackerService {
    expenses: any[] = [];
    constructor() {
    }
    getExpenses(): any {
        this.expenses = [];
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if(key=="isLoggedIn")
                continue;
            let value = JSON.parse(localStorage.getItem(key));
            this.expenses.push(value);
        }
        return this.expenses;
    }
    addExpense(description, cost, category, date) {
        let id = uuid();
        let exp1 = new Expense(category, cost, description, date, id)
        localStorage.setItem(id, JSON.stringify(exp1));
    }
    deleteExpense(expenseId) {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key == expenseId) {
                localStorage.removeItem(key);
                break;
            }
        }
    }
    getExpense(expenseId): any {
        for (let expense of this.expenses) {
            if (expense.id == expenseId) {
                return expense;
            }
        }
    }
    updateExpense(id, description, cost, category, date) {
        let updateExpense1 = new Expense(category, cost, description, date, id);
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key == id) {
                localStorage.setItem(key, JSON.stringify(updateExpense1));
                break;
            }
        }
    }
    
}