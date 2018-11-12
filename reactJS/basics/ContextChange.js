// "use strict";
function Student(name,cgpa){
    this.name=name;
    this.cgpa=cgpa;
}
console.log(Student.prototype);
Student.prototype.showDetails=function(){
    console.log("Inside show details function");
    console.log("Name of the student is "+this.name);
    console.log("CGPA of the student is "+this.cgpa);
}
console.log(Student.prototype);
var s1=new Student("Deval",8);
var s2=new Student("Jay",9);
s1.showDetails();
s2.showDetails();
var news1=s1.showDetails;
news1();
var news2=s2.showDetails;
news2();