import React, { Component } from 'react';
import StudentService from './studentService';
export default class EditComponent extends Component {
    _service;
    constructor(props) {
        super(props);
        this._service = new StudentService();
        this.state = {
            student: null
        }
        this.getStudent(this.props.match.params.rollNo);
    }
    saveStudent = () => {
        let studentJson = { rollNo: this.state.student.rollNo, name: this.state.student.name, email: this.state.student.email, age: this.state.student.age, date: this.state.student.date, isMale: this.state.student.isMale };
        this._service.saveStudent(this.state.student.rollNo, studentJson).then(res => window.location.hash = "/");
    }
    getStudent(no) {
        this._service.getStudent(no)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    student: data
                });
            }
            );
    }
    handleRollNoChange = (event) => {
        let tempStudent = this.state.student;
        tempStudent.rollNo = event.target.value;
        this.setState({
            student: tempStudent
        });
    }
    handleNameChange = (event) => {
        let tempStudent = this.state.student;
        tempStudent.name = event.target.value;
        this.setState({
            student: tempStudent
        });
    }
    handleEmailChange = (event) => {
        let tempStudent = this.state.student;
        tempStudent.email = event.target.value;
        this.setState({
            student: tempStudent
        });
    }
    handleDateChange = (event) => {
        let tempStudent = this.state.student;
        tempStudent.date = event.target.value;
        this.setState({
            student: tempStudent
        });
    }
    handleAgeChange = (event) => {
        let tempStudent = this.state.student;
        tempStudent.age = event.target.value;
        this.setState({
            student: tempStudent
        });
    }
    handleGenderChange = (event) => {

        let tempStudent = this.state.student;
        tempStudent.isMale = event.target.value === "Male" ? true : false;
        console.log("target");
        console.log(event.target.value);
        console.log("temp");
        console.log(tempStudent.isMale);
        this.setState({
            student: tempStudent
        });
        console.log("state");
        console.log(this.state.student.isMale);
    }
    render() {
        if (this.state.student != null) {
            var jsx = (
                <div>
                    {/* <form className="form-horizontal"> */}
                    <div className="form-group">
                        <label className="control-label col-sm-2">Roll No: <b style={{ color: 'red' }}>{this.state.student.rollNo == null ? '*' : null}</b></label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" defaultValue={this.state.student.rollNo} placeholder="Enter Roll No." name="rollNo" onChange={this.handleRollNoChange} disabled={true} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2">Name:<b style={{ color: 'red' }}>{this.state.student.name == null ? '*' : null}</b></label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" defaultValue={this.state.student.name} placeholder="Enter Name" name="name" onChange={this.handleNameChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2">Email:<b style={{ color: 'red' }}>{this.state.student.email == null ? '*' : null}</b></label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" defaultValue={this.state.student.email} placeholder="Enter email" name="email" onChange={this.handleEmailChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2">Age:<b style={{ color: 'red' }}>{this.state.student.age == null ? '*' : null}</b></label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" placeholder="Enter Age" defaultValue={this.state.student.age} name="age" onChange={this.handleAgeChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2">Date:<b style={{ color: 'red' }}>{this.state.student.date == null ? '*' : null}</b></label>
                        <div className="col-sm-10">
                            <input className="input-group date" defaultValue={this.state.student.date} name="date" type="date" onChange={this.handleDateChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2">Gender:</label>
                        <div className="col-sm-10">
                            <label className="radio-inline">
                                <input type="radio" value="Male" name="gender" defaultChecked={this.state.student.isMale} onChange={this.handleGenderChange} />Male
                        </label>&nbsp;
                        <label className="radio-inline">
                                <input type="radio" value="Female" name="gender" defaultChecked={this.state.student.isMale === false} onChange={this.handleGenderChange} />Female<b style={{ color: 'red' }}>{this.genderStar}</b>
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
                        </div>
                    </div>
                    {/* <b style={{ color: "red" }}>{this.state.student.msg}</b> */}
                    {/* </form > */}
                </div >
            );
        }
        else {
            jsx = null;
        }
        return jsx;
    }
}