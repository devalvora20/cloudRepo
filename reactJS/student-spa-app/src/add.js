import React, { Component } from 'react';
import StudentService from './studentService';
export default class AddComponent extends Component {
    _service;
    constructor() {
        super();
        this._service=new StudentService();
        this.state = {
            rollNo: null,
            name: null,
            email: null,
            age: null,
            date: null,
            gender: "Male",
            msg: ""
        };
    }
    
    addStudent = () => {
        if (this.state.rollNo === null || this.state.name === null || this.state.email === null || this.state.age === null || this.state.date === null) {
            this.setState({
                msg: "Fill all the important details"
            })
            return;
        }
        let studentJson = { rollNo: this.state.rollNo, name: this.state.name, email: this.state.email, age: this.state.age, date: this.state.date, isMale: this.state.gender === "Male" ? true : false };
        this._service.addStudent(studentJson)        
        .then(res => window.location.hash = "/");
    }
    handleRollNoChange = (event) => {
        this.setState({
            rollNo: event.target.value
        });
    }
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });
    }
    handleDateChange = (event) => {
        this.setState({
            date: event.target.value
        });
    }
    handleAgeChange = (event) => {
        this.setState({
            age: event.target.value
        });
    }
    handleGenderChange = (event) => {
        this.setState({
            gender: event.target.value
        });
    }
    render() {
        var jsx = (
            <div>
                {/* <form className="form-horizontal"> */}
                <div className="form-group">
                    <label className="control-label col-sm-2">Roll No: <b style={{ color: 'red' }}>{this.state.rollNo == null ? '*' : null}</b></label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" defaultValue={this.state.rollNo} placeholder="Enter Roll No." name="rollNo" onChange={this.handleRollNoChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2">Name:<b style={{ color: 'red' }}>{this.state.name == null ? '*' : null}</b></label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" defaultValue={this.state.name} placeholder="Enter Name" name="name" onChange={this.handleNameChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2">Email:<b style={{ color: 'red' }}>{this.state.email == null ? '*' : null}</b></label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" defaultValue={this.state.email} placeholder="Enter email" name="email" onChange={this.handleEmailChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2">Age:<b style={{ color: 'red' }}>{this.state.age == null ? '*' : null}</b></label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" placeholder="Enter Age" defaultValue={this.state.age} name="age" onChange={this.handleAgeChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2">Date:<b style={{ color: 'red' }}>{this.state.date == null ? '*' : null}</b></label>
                    <div className="col-sm-10">
                        <input className="input-group date" defaultValue={this.state.date} name="date" type="date" onChange={this.handleDateChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2">Gender:</label>
                    <div className="col-sm-10">
                        <label className="radio-inline">
                            <input type="radio" value="Male" name="gender" checked onChange={this.handleGenderChange} />Male
                        </label>&nbsp;
                        <label className="radio-inline">
                            <input type="radio" value="Female" name="gender" onChange={this.handleGenderChange} />Female<b style={{ color: 'red' }}>{this.genderStar}</b>
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button className="btn btn-success" onClick={this.addStudent}>Add</button>
                    </div>
                </div>
                <b style={{ color: "red" }}>{this.state.msg}</b>
                {/* </form > */}
            </div >
        );
        return jsx;
    }
}