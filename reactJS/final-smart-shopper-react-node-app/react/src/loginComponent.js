import React, { Component } from 'react';
import SmartShopperService from './smartShopperService';
export default class LoginComponent extends Component {
    _service;
    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            msg:''
        }
        this._service = new SmartShopperService();
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
    authenticate = () => {
        let user={'email':this.state.email,'password':this.state.password};
        this._service.authenticate(user)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                window.sessionStorage.setItem('userId',data.id);
                window.sessionStorage.setItem('firstName',data.firstName);
                window.sessionStorage.setItem('isLoggedIn',true);
                window.location.hash='/';
            }
            )
            .catch(error =>{ this.setState({
                msg:'Enter valid credentials'
            })
        });
    }
    render() {
        var jsx = (
            <div style={{ padding: '8px' }}>
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input type="email" onChange={this.handleEmailChange} className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" onChange={this.handlePasswordChange} className="form-control" placeholder="Enter password" />
                </div>
                <button onClick={this.authenticate} className="btn btn-default">Login</button>
                <br/>
                <div style={{color:'red',marginTop:'8px'}}>{this.state.msg}</div>
            </div>
        )
        return jsx;
    }
}