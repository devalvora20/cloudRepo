import { Component } from '@angular/core';
import {PrimeComponentService} from '../prime-number/PrimeComponentService';

@Component({
    selector: 'st-isPrime',
    templateUrl: './primeNumber.component.html',
})
export class PrimeNumberComponent {
    number1: number;
    isNumberPrime:number=3;
    constructor(private _primeService:PrimeComponentService){
        console.log("Service created");
    }
    isPrime(event) {
        this.isNumberPrime=this._primeService.isPrime(event);
    }
}