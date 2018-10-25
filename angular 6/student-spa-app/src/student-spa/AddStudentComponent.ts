import { Component, OnInit } from '@angular/core';
import { StudentService } from './StudentService'
import { Router } from '@angular/router';
@Component({
    templateUrl: './AddStudentComponent.html',
})
export class AddStudentComponent {
    constructor(private _studentService: StudentService, private router: Router) { }
    rollNo: number;
    rollNoStar: String;
    name: String;
    nameStar: String;
    email: String;
    emailStar: String;
    age: number;
    ageStar: String;
    date: String;
    dateStar:String;
    gender: String;
    genderStar: String;
    student: any;
    loaderHidden = true;
    msg: String;
    addStudent() {
        if (this.validate()) {
            this.loaderHidden = false;
            this.student = { 'rollNo': this.rollNo, 'name': this.name, 'email': this.email, 'age': this.age, 'date': this.date, 'isMale': this.gender };
            console.log("add student component: ")
            console.log(this.student);
            let promise = this._studentService.addStudent(this.student);
            promise.then(
                (response) => {
                    console.log("no error" + response);
                    this.loaderHidden = true;
                    this.router.navigate(['/display']);
                },
                () => console.log("Task Errored!"),
            );
        }
    }
    validate() {
        if (this.rollNo != null && this.name != null && this.email != null && this.age != null && this.gender != null && this.date!=null){
            this.msg="";
            return true;
        }
        else {
            if (this.rollNo == null)
                this.rollNoStar = "*"
            else
                this.rollNoStar = ""
            if (this.name == null)
                this.nameStar = "*"
            else
                this.nameStar = ""
            if (this.age == null)
                this.ageStar = "*"
            else
                this.ageStar = ""
            if (this.gender == null)
                this.genderStar = "*"
            else
                this.genderStar = ""
            if (this.email == null)
                this.emailStar = "*"
            else
                this.emailStar = ""
            if (this.date == null)
                this.dateStar = "*"
            else
                this.dateStar = ""

            this.msg = "All details Must be Filled";
            return false;
        }
    }
}