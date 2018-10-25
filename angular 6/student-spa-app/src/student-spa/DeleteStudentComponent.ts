import { Component, OnInit } from '@angular/core';
import {StudentService} from './StudentService'
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    templateUrl: './DeleteStudentComponent.html',
})
export class DeleteStudentComponent implements OnInit{
    rollNo:number;
    loaderHidden:boolean=true;
    constructor( private _studentService:StudentService,private route: ActivatedRoute,private router: Router){   }
    ngOnInit(){
        this.rollNo=+this.route.snapshot.paramMap.get('rollNoToDelete');
    }

    delete(){
        this.loaderHidden=false;
        let promise=this._studentService.deleteStudent(this.rollNo);
        promise.then(
            (response) => {
                this.loaderHidden=true;
                console.log("no error: "+response);
                this.router.navigate(['/display']);
            },
            () => console.log("Task Errored!"),
          );
    }
}