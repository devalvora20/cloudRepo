import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient, HttpHandler } from '@angular/common/http';


@Component({
    selector: 'page-home',
    templateUrl: 'numberApi.html'
})
export class NumberApiPage {

    num: number;
    facts: String[] = [];
    color: String[] = ["primary", "secondary", "danger","three" ,"four","five"];
    constructor(public navCtrl: NavController, private http: HttpClient) {
        // console.log("Service created");
        // for (let i = 0; i < localStorage.length; i++) {
        //     let key = localStorage.key(i);
        //     let value = localStorage.getItem(key);
        //     this.facts.push(value);
        // }
    }
    a: any;
    getFact(event) {
        console.log("sds"+event);
        if (event.key === "Enter" || event==="Enter") {
            this.getFact1(this.num).subscribe(response => {
                this.a = response;
                this.facts.push(this.a.text);
                // localStorage.setItem(this.num.toString(), this.a.text);
            });
        }
    }

    getFact1(num: any) {
        return this.http.get(
            "http://numbersapi.com/" + num + "/math?json", { responseType: 'json' });
    }
}