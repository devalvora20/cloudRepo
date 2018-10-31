import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-percentCalc',
    templateUrl: 'percentCalc.html'
})
export class PercentCalculatePage {
    num11: number;
    num12: number;
    ans1: number;

    num21: number;
    num22: number;
    ans2: number;

    num31: number;
    num32: number;
    ans3: number;
    constructor(public navCtrl: NavController) {
    }
    xPercentOfY(num1,num2) {
        if (num1 == null || num2 == null)
            this.ans1 = 0;
        else {
            this.ans1 = (num1 / 100) * num2;
        }
    }

    xIsWhatPercentOfY(num1, num2) {
        if (num1 == null || num2 == null)
            this.ans2 = 0;
        else {
            this.ans2 = (num1 * 100) / num2;
        }
    }

    percentChangeFromXtoY(num1, num2) {
        if (num1 == null || num2 == null)
            this.ans3 = 0;
        else {
            this.ans3 = ((num2 - num1) / num1) * 100;
        }
    }

    x1Change(e){
        this.xPercentOfY(e,this.num12);
    }
    y1Change(e){
        this.xPercentOfY(this.num11,e);
    }
    x2Change(e){
        this.xIsWhatPercentOfY(e,this.num22);
    }
    y2Change(e){
        this.xIsWhatPercentOfY(this.num21,e);
    }
    x3Change(e){
        this.percentChangeFromXtoY(e,this.num32);
    }
    y3Change(e){
        this.percentChangeFromXtoY(this.num31,e);
    }
}
