import React, { Component } from 'react';
import StudentService from './studentService';
export default class DelteComponent extends Component {
    _service;
    constructor(){
        super();
        this._service=new StudentService();
    }
    deleteStudent=()=>{
        this._service.deleteStudent(this.props.match.params.rollNo)
        .then(res => window.location.hash = "/")
    }
    homePage=()=>{
        window.location.hash="/";
    }
    render(){
        var jsx=(<div>
            <h3>Are you sure you want to delete student with <strong> Roll No: {this.props.match.params.rollNo}</strong>?</h3><br/>
            <button className="btn btn-success" onClick={this.deleteStudent}> Yes</button>&nbsp;
            <button className="btn btn-danger" onClick={this.homePage}> No</button>
        </div>);
        return jsx;
    }
}