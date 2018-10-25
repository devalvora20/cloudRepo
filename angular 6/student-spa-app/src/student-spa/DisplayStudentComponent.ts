import { Component, OnInit } from '@angular/core';
import {StudentService} from './StudentService'
@Component({
    templateUrl: './DisplayStudentComponent.html',
})
export class DisplayStudentComponent implements OnInit{
    students:any={};
    loaderHidden=true;
    constructor( private _StudentService:StudentService){   }

    ngOnInit(){
        this.loadStudents();
    }

    loadStudents(){
        this.loaderHidden=false;
        let promise=this._StudentService.loadStudents();
        promise.then(
            (response) => {
                this.loaderHidden=true;
                this.students=response;
            },
            () => console.log("Task Errored!"),
          );
    }
}