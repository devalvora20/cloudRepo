import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Link, Route } from 'react-router-dom';
import WelcomeComponent from './welcomeComponent';
import ProductListComponent from './productListComponent';
import ProductDetailComponent from './productDetailComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
const routeConfig =
    <HashRouter>
        <div>
        <div style={{marginLeft:'10px',marginRight:'10px',backgroundColor:'rgb(243, 243, 243)',fontSize:'18px',padding:'8px',borderBottomLeftRadius: "5px"}}>
            <span style={{marginLeft:'10px',color:'#4d4d4d'}}>Acme Product Management</span>&nbsp;
            <Link style={{marginLeft:'10px',color:'#4d4d4d'}} to="/">Home</Link>&nbsp;
            <Link style={{marginLeft:'10px',color:'#4d4d4d'}} to="/productList">Product List</Link>
        </div>
            <div style={{ padding: '10px' }}>
                <div id="content">
                    <Route exact path="/" component={WelcomeComponent} />
                    <Route exact path="/productList" component={ProductListComponent} />
                    <Route path="/productDetail:id" component={ProductDetailComponent} /> 
                </div>
            </div>
        </div>
    </HashRouter>

ReactDOM.render(routeConfig, document.querySelector('#root'));