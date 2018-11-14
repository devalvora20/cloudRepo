import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StudentService from './studentService';
export default class HomeComponent extends Component {
    _service;
    constructor() {
        super();
        this._service=new StudentService();
        this.getStudents();
        this.state = {
            students: []
        };
    }
    getStudents() {
        this._service.getStudents()        
            .then(response => response.json())
            .then(data => {
                this.setState({
                    students: data
                });
            }
            );
    }
    editStudent = (no) => {
        window.location.hash = "/edit" + no;
    }
    deleteStudent = (no) => {
        window.location.hash = "/delete" + no;
    }
    render() {
        var studentsList = this.state.students.map(function (student, index) {
            return (

                <tr style={{backgroundColor:student.isMale ?'lightblue':'pink'}}>
                    <td>{student.rollNo}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.age}</td>
                    <td>{student.date}</td>
                    <td>{student.isMale ? 'Male' : 'Female'}</td>
                    <td><button className="btn btn-primary" onClick={() => { this.editStudent(student.rollNo) }}>Edit</button>&nbsp;<button className="btn btn-primary" onClick={() => { this.deleteStudent(student.rollNo) }}>Delete</button></td>
                </tr>
            );
        }.bind(this));
        var jsx = (
            <div>
                <Link to="/Add" className='btn btn-primary' >Add</Link>
                <br /><br />
                <table className="table table-bordered table-condensed">
                    <tr>
                        <th>Roll no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Date</th>
                        <th>Gender</th>
                        <th>Options</th>
                    </tr>
                    <tbody>
                        {studentsList}
                    </tbody>
                </table>
            </div>
        );
        return jsx;
    }
}