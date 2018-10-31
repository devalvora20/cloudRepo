import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'st-page-name-matcher',
    templateUrl: 'nameMatcher.html'
})
export class NameMatcherPage {

    firstName: String = "";
    secondName: String = "";
    result: number = 0;
    constructor(public navCtrl: NavController) {
console.log("const");
    }

    match() {
        let fascii = 0;
        let sascii = 0;
        if (this.firstName != null) {
            for (let i = 0; i < this.firstName.length; i++) {
                let character = +this.firstName.charCodeAt(i);
                fascii = fascii + character;
            }
        }
        if (this.secondName != null) {
            for (let i = 0; i < this.secondName.length; i++) {
                let character2 = +this.secondName.charCodeAt(i);
                sascii = sascii + character2;
            }
        }
        this.result = (fascii + sascii) % 101;
        console.log(this.result);
        console.log("fascii " + fascii);
        console.log("sascii " + sascii);
    }
}
