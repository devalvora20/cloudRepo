import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })
export class StudentApiService{

    constructor(private http:HttpClient){
    }
    api_url:String="http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students/";
    loadStudents(){
        // return this.http.get("http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students/");
        let promise = new Promise((resolve, reject) => {
            
            this.http.get("http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students/")
              .toPromise()
              .then(
                res => { // Success
                  console.log(res);
                  resolve(res);
                }
              );
          });
          return promise;
    }

}