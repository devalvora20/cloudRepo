import { Component } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { NumbersApiService } from './numbersApiService';

@Component({
    selector: 'st-numbersApi',
    templateUrl: './numbersApi.component.html',
})
export class NumbersApiComponent {
    num:number;
    facts: String[] = [];
    color:String[]=["success","info","warning","danger","secondary","dark"];
    constructor(private _numbersApiService: NumbersApiService) {
        console.log("Service created");
        for (let i = 0; i < localStorage.length; i++){
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            this.facts.push(value);
        }
    }
    a: any;
    getFact(event) {
        if (event.key === "Enter") {
            this._numbersApiService.getFact(this.num).subscribe(response => {
                this.a = response;
                this.facts.push(this.a.text);
                localStorage.setItem(this.num.toString(),this.a.text);
            });
        }
    }
}