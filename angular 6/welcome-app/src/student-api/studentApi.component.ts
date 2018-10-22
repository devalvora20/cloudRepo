import { Component } from '@angular/core';
import { StudentApiService } from './StudentApiService';

@Component({
    selector: 'st-studentApi',
    templateUrl: './studentApi.component.html',
})
export class StudentApiComponent {
    students:any={};
    constructor( private _studentApiService:StudentApiService){   }
    loadStudents(){
        // this._studentApiService.loadStudents().subscribe(response => {
        //     console.log(response);
        // });
        let promise=this._studentApiService.loadStudents();
        promise.then(
            (response) => {
                this.students=response;
                
            },
            () => console.log("Task Errored!"),
          );
    }
}