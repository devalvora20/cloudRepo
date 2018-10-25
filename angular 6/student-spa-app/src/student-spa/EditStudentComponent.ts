import { Component, OnInit } from '@angular/core';
import { StudentService } from './StudentService'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './EditStudentComponent.html',
})
export class EditStudentComponent implements OnInit {
    rollNo: number;
    msg: String;
    isChanged: boolean = false;
    gender: String;
    student: any = [];
    loaderHidden = true;
    constructor(private _studentService: StudentService, private route: ActivatedRoute, private router: Router) { }
    ngOnInit() {
        this.loaderHidden = false;
        this.rollNo = +this.route.snapshot.paramMap.get('rollNoToEdit');
        let promise = this._studentService.getStudent(this.rollNo);
        promise.then(
            (response) => {
                this.loaderHidden = true;
                this.student = response;
                this.gender = this.student.isMale;
                console.log(this.student);
            },
            () => console.log("Task Errored!"),
        );
    }
    studentEdited() {
        this.msg="";
        this.isChanged = true;
    }
    saveStudent() {
        this.loaderHidden = false
        if (this.isChanged) {
            this.student.isMale = this.gender;
            console.log(this.student)
            let promise = this._studentService.saveStudent(this.student);
            promise.then(
                (response) => {
                    this.loaderHidden=true;
                    this.router.navigate(['/display']);
                },
                () => console.log("Task Errored!"),
            );
        }
        else{
            this.loaderHidden=true;
            this.msg="Student Not Edited"
        }
    }

}