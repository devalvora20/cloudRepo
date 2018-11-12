import React, { Component } from 'react';
export default class StudentComponent extends Component {
    student = {
        name: "deval",
        age: 22,
        rollNo: 1280059,
        cgpa: 7.5
    };

    constructor(){
        super();
        this.state={
            students:[]
        }
    }

    loadStudents=()=> {        
        this.setState({
            students:[
                { img: 'https://cdn-images-1.medium.com/max/1200/1*6kK9j74vyOmXYm1gN6ARhQ.png', name: "deval", age: 22, rollNo: 1280059, cgpa: 9.5 }, { img: 'https://www.w3schools.com/w3css/img_lights.jpg', name: "abc", age: 12, rollNo: 11233, cgpa: 8.5 }, { img: 'data:image/jpeg;base64,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', name: "def", age: 22, rollNo: 32324, cgpa: 6.5 }
            ]
        });
    }

    render() {
        const myStyle = {
            color: 'blue',
            fontSize: 25,
        };
        var listStudents = this.state.students.map(function (student1) {
            return (
                <div>
                    <p><img alt="img" src={student1.img} width="60px" height="60px" /><br /> Name: {student1.name}</p>
                    <p style={{ color: 'purple' }}>Age: {student1.age}</p>
                    <p style={myStyle}>Roll No: {student1.rollNo}</p><br />
                    <b style={{ backgroundColor: student1.cgpa > 8 ? 'green' : 'red', color: 'white' }}>CGPA: {student1.cgpa}</b>
                    <h1>-------------------</h1>
                </div>
            );
        });
        var jsx = (
            <div>
                <div className='jumbotron'>
                    <img alt="img" src={'https://cdn-images-1.medium.com/max/1200/1*6kK9j74vyOmXYm1gN6ARhQ.png'} width="60px" height="60px" /><br />
                    Name: {this.student.name}<br />
                    age: {this.student.age}<br />
                    rollNo: {this.student.rollNo}<br />
                    cgpa: {this.student.cgpa}
                </div>
                <button className='btn btn-primary' onClick={this.loadStudents}>Load Students</button><br /><br />
                {listStudents}
            </div>
        );
        return jsx;
    }
}