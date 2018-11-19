import React, { Component } from 'react';
import SmartShopperService from './smartShopperService';
export default class LoginComponent extends Component {
    _service;
    constructor() {
        super();
        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            msg: ''
        }
        this._service = new SmartShopperService();
    }
    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    register = () => {
        if (this.state.firstName === null || this.state.lastName === null || this.state.email === null || this.state.password === null) {
            this.setState({
                msg: "Fill all the details"
            });
        }
        else {
            let user = {
                "firstName": this.state.firstName,
                "lastName": this.state.lastName,
                "email": this.state.email,
                "password": this.state.password
            }
            this._service.register(user)
                .then(data => {
                    if (alert("Registration Successfull!")==null) {
                        window.location.hash = '/login';
                    }                    
                }
                );
        }
    }
    render() {
        var jsx = (
            <div style={{ padding: '8px' }}>
                <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" onChange={this.handleFirstNameChange} className="form-control" placeholder="Enter First Name" />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input type="text" onChange={this.handleLastNameChange} className="form-control" placeholder="Enter Last Name" />
                </div>
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input type="email" onChange={this.handleEmailChange} className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" onChange={this.handlePasswordChange} className="form-control" placeholder="Enter password" />
                </div>
                <button onClick={this.register} className="btn btn-default">Login</button>
                <br />
                <div style={{ color: 'red', marginTop: '8px' }}>{this.state.msg}</div>
            </div>
        );
        return jsx;
    }
}