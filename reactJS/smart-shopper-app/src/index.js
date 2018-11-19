import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Link, Route } from 'react-router-dom';
import HomeComponent from './homeComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './loginComponent';
import RegisterComponent from './registerComponent';
import CartComponent from './cartComponent';
import OrderHistoryComponent from './orderHistoryComponent';

const routeConfig =
    <HashRouter>
        <div>
        {/* <link data-require="bootstrap-css@3.3.6" data-semver="3.3.6" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.css" /> */}
            
            <div style={{ padding: '10px' }}>
                <div id="content">
                    <Route exact path="/" component={HomeComponent} />
                    <Route exact path="/login" component={LoginComponent} />
                    <Route path="/register" component={RegisterComponent} /> 
                    <Route path="/cart" component={CartComponent} /> 
                    <Route path="/previousOrders:userId" component={OrderHistoryComponent} /> 
                </div>
            </div>
        </div>
    </HashRouter>
ReactDOM.render(routeConfig, document.querySelector('#root'));