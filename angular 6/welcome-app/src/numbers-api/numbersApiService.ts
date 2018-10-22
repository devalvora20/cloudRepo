import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class NumbersApiService{

    constructor(private http:HttpClient){
    }
    getFact(num:any){
       return this.http.get(
        "http://numbersapi.com/"+num+"/math?json",{responseType:'json'});
    }
}
