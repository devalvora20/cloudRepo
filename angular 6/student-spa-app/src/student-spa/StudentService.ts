import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  constructor(private http: HttpClient) {
  }
  loadStudents() {
    let promise = new Promise((resolve, reject) => {
      this.http.get("http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students/")
        .toPromise()
        .then(
          res => { // Success
            resolve(res);
          }
        );
    });
    return promise;
  }
  addStudent(student1) {
    console.log("POST: ")
    console.log(student1);
    let promise = new Promise((resolve, reject) => {
      this.http.post("http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students/", student1, this.httpOptions)
        .toPromise()
        .then(
          res => { // Success
            resolve(res);
          },
          rej => { // error
            reject(rej);
          }
        );
    });
    return promise;
  }
  deleteStudent(rollNo) {
    let promise = new Promise((resolve, reject) => {
      this.http.delete("http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students/" + rollNo)
        .toPromise()
        .then(
          res => { // Success
            resolve(res);
          }
        );
    });
    return promise;
  }

  getStudent(rollNo) {
    let promise = new Promise((resolve, reject) => {
      this.http.get("http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students/" + rollNo)
        .toPromise()
        .then(
          res => { // Success
            resolve(res);
          }
        );
    });
    return promise;
  }

  saveStudent(student2) {
    
    let promise = new Promise((resolve, reject) => {
      this.http.put("http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students/" + student2.rollNo, student2, this.httpOptions)
        .toPromise()
        .then(
          res => { // Success
            resolve(res);
          },
          rej => { // error
            reject(rej);
          }
        );
    });
    return promise;
  }
}