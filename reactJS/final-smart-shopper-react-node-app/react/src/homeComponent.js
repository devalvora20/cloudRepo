import React, { Component } from 'react';
import SmartShopperService from './smartShopperService';
import { Link } from 'react-router-dom';
import style from './smartShopper.css';
export default class HomeComponent extends Component {
    _service;
    allProducts;
    constructor(props) {
        super(props);
        this._service = SmartShopperService.getService();
        let userLoggedIn=window.sessionStorage.isLoggedIn;
        let firstName1=window.sessionStorage.firstName;
        if(userLoggedIn===undefined)
            userLoggedIn='false';
        this.state = {
            products: null,
            count: 0,
            isLoggedIn:userLoggedIn,
            firstName:firstName1
        }
        console.log(this.state.isLoggedIn);
        this.getProducts();
    }
    searchChange = (event) => {
        let prods = [];
        let count = 0;
        let srch = event.target.value.toString();
        for (let i = 0; i < this.allProducts.length; i++) {
            if (this.allProducts[i].name.toUpperCase().includes(srch.toUpperCase())) {
                prods[count++] = this.allProducts[i];
            }
        }
        this.setState({
            products: prods
        })
    }
    getProducts() {
        let size = this._service.getCartSize();
        this._service.getProducts()
            .then(response => response.json())
            .then(data => {
                this.allProducts = data;
                this.setState({
                    products: data,
                    count: size
                });
            }
            );
    }
    addToCart = (item) => {
        console.log(window.sessionStorage.getItem('isLoggedIn'));
        if (window.sessionStorage.getItem('isLoggedIn')!=null && window.sessionStorage.getItem('isLoggedIn')==='true') {
            if (alert("Item added to cart!")==null) {
            this._service.addToCart(item);
            this.setState({
                count: this._service.getCartSize()
            });
            }
        }
        else {
            window.location.hash='/login';
        }
    }
    logout=()=>{
        window.sessionStorage.setItem('isLoggedIn','false');
        this.setState({
            count: 0,
            isLoggedIn:'false'
        })
        this._service.flushCart();
    }
    render() {
        if (this.state.products != null) {
            var products = this.state.products.map(function (p, index) {
                return (
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12"  key={index}>
                        <div className="my-list box">
                            <img alt="" src={'pics/' + p.image} style={{ width: '100%', height: '100%' }} />
                            <h3>{p.name}</h3>
                            <span>RS:{p.price}</span>
                            <span className="pull-right">{p.category_name}</span>
                            <div className="offer">Extra 5% Off. Cart value Rs 500</div>
                            <div className="detail">
                                <p>{p.description} </p>
                                <img alt="" src={'pics/' + p.image} style={{ width: '100%', height: '290px' }} />
                                <button data-toggle="modal" data-target="{{modalId}}" onClick={() => this.addToCart(p)} className="btn btn-info">Add to cart</button>
                            </div>
                        </div>
                    </div>
                );
            }.bind(this));
        }
        else {
            products = null;
        }
        var jsx = (
            <div>
                <link data-require="bootstrap-css@3.3.6" data-semver="3.3.6" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.css" />
                <div style={{ height: '50px', backgroundColor: '#F6F4F4', fontSize: '18px', padding: '8px', borderBottomLeftRadius: "5px", boxShadow: "1px 2px #D8D8D8", borderBottomRightRadius: "5px", marginRight: '6px' }}>
                <Link to="/" style={{ cursor:'pointer',fontWeight: '450', marginLeft: '10px', color: '#686767' }}>Smart Shopper</Link>&nbsp;
                <span style={{ float: 'right', marginRight: '36px' }}>
                <Link to={this.state.isLoggedIn==='true'?'/cart':'/login'} style={{ fontSize: '20px' }} className="glyphicon glyphicon-shopping-cart"><label id="cart-badge" className="badge badge-danger"
                        style={{ backgroundColor: 'red' }}>{this.state.count}</label></Link>&nbsp;
                    <Link hidden={this.state.isLoggedIn==='true'} style={{ marginLeft: '10px', color: '#4d4d4d' }} to="/login">Login</Link>&nbsp;
                    <button onClick={this.logout} hidden={this.state.isLoggedIn==='false'} style={{ marginLeft: '10px', color: '#4d4d4d',fontSize:'18px' }} className='btn btn-link'>Logout</button>&nbsp;
                    <Link style={{ marginLeft: '10px', color: '#4d4d4d' }} to="/register">Register</Link>&nbsp;                        
                    
                </span>
                </div><br/>
                <div className='input-group'>
                        <input type="text" className="form-control"
                            placeholder="Search" name="srch-term" onChange={this.searchChange} />
                        <div className="input-group-btn">
                            <button style={{ pointerEvents: 'none' }} className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                        </div>
                    </div>
                <br />
                <div className="jumbotron" hidden={this.state.isLoggedIn==='false'}>
                    Welcome { this.state.firstName } to Smart Shopper
                </div>
                <article>
                    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                    <div className="row" >
                        {products}
                    </div>
                </article>
            </div>
        )
        return jsx;
    }
}