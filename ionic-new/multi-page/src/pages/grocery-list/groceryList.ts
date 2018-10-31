import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-grocery',
    templateUrl: 'groceryList.html'
})
export class GroceryListPage {
    customStyle:any[] = [];
    item: String;
    items: String[] = [];
    visible: boolean[] = [];
    constructor(public navCtrl: NavController) {
console.log("const");
    }
    addItem(event) {
        console.log("Add item "+event);
        if (event.key === "Enter" || event==="Enter") {
            this.items.push(this.item);
        }
    }
    check(i,event) {
        if (this.visible[i]) {
            this.visible[i] = false;
            this.customStyle[i] = {};
        }
        else {
            this.customStyle[i]={'text-decoration': 'line-through'};
            this.visible[i] = true
        }
        
    }
    deleteItem(i) {
        this.customStyle.splice(i,1);
        this.visible.splice(i, 1);
        this.items.splice(i, 1);
    }
    deleteAll() {
        this.customStyle=[];
        this.visible = [];
        this.items = [];
    }
}
