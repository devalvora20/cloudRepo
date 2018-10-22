import { Component } from '@angular/core';


interface IStudent{
    img:String,
    name:String;
    age:number;
    rollNo:number;
    cgpa:number;
}
@Component({
    selector: 'st-student',
    templateUrl: './student.component.html',
  })
export class StudentComponent {
  student:IStudent={img:"assets/images/Koala.jpg",name:"deval",age:22,rollNo:1280059,cgpa:7.5};
  constructor(){
    this.timeout();
  }
  students:IStudent[];
  myStyles = {
    'font-size': '30px',
    'color':'red',
    'font-weight': 'bold'
    }
  counter:number=0;
  incCount():void{
    this.counter++;
  }
  timeout():void{
    setTimeout(() => {
      this.student={img:"assets/images/Tulips.jpg",name:"def",age:22,rollNo:32324,cgpa:9.5};
    }, 3000);
  }
  
  loadStudents():void{
    this.students=[{img:"assets/images/Koala.jpg",name:"deval",age:22,rollNo:1280059,cgpa:9.5},{img:"assets/images/Jellyfish.jpg",name:"abc",age:12,rollNo:11233,cgpa:8.5},{img:"assets/images/Tulips.jpg",name:"def",age:22,rollNo:32324,cgpa:6.5}];
  }

  cgpaStyle(cgpa:number):any{
    let cgpaStyle = {
      'color': cgpa>9 ? 'green' : cgpa>8 ? 'orange' : 'red',
    };
    return cgpaStyle;
  }
}