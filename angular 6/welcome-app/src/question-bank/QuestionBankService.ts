import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })
export class QuestionBankService{
    constructor(private http:HttpClient){
    }
    loadQuestions(){
        let promise = new Promise((resolve, reject) => {    
            this.http.get("./assets/json/questions.json")
              .toPromise()
              .then(
                res => { // Success
                  resolve(res);
                }
              );
          });
          return promise;
    }
}