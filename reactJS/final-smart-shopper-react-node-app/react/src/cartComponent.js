import React, { Component } from 'react';
import SmartShopperService from './smartShopperService';
import { Link } from 'react-router-dom';
export default class CartComponent extends Component {
    _service;
    constructor() {
        super();
        this._service =SmartShopperService.getService();
        console.log(this._service.toString());
        this.state = {
            cartItems: null
        }
        this.getCartItems();
    }
    getCartItems() {
        let cart = this._service.getCartItems();
        this.state={
            cartItems: cart
        };
    }
    getCartItems1() {
        let cart = this._service.getCartItems();
        this.setState({
            cartItems: cart
        });
    }
    deleteItem(itemToDelete){
        this._service.deleteItem(itemToDelete);
        this.getCartItems1();
    }
    placeOrder=()=>{
        if(window.sessionStorage.getItem('isLoggedIn')==='true')
            this._service.placeOrder(window.sessionStorage.getItem('userId')).then(data => {
                this._service.flushCart();
                if (alert("Order Placed!")==null) {
                    window.location.hash = '/';
                }                    
            }
            );
        else
            window.location.hash='/login';
    }
    render() {
        if (this.state.cartItems != null) {
            var cartItems = this.state.cartItems.map(function (item, index) {
                return (
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.quantity * item.price}</td>
                        <td><button className='btn btn-danger' onClick={()=>this.deleteItem(index)}>X</button></td>
                    </tr>
                );
            }.bind(this));
        }
        var jsx = (
            <div>
                 <link data-require="bootstrap-css@3.3.6" data-semver="3.3.6" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.css" />
                <div style={{ height: '50px', backgroundColor: '#F6F4F4', fontSize: '18px', padding: '8px', borderBottomLeftRadius: "5px", boxShadow: "1px 2px #D8D8D8", borderBottomRightRadius: "5px", marginRight: '6px' }}>
                <Link to="/" style={{ cursor:'pointer',fontWeight: '450', marginLeft: '10px', color: '#686767' }}>Smart Shopper</Link>&nbsp;
                </div><br/>
                <h4>Cart</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">name</th>
                            <th scope="col">unit price</th>
                            <th scope="col">quantity</th>
                            <th scope="col">Item Total</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems}
                    </tbody>
                </table><br/>
                <button className='btn btn-primary' disabled={!this.state.cartItems.length>0} onClick={this.placeOrder}>Place Order</button>&nbsp;&nbsp;
                <Link to={'/previousOrders'+window.sessionStorage.userId} className='btn btn-primary'>View Previous Orders</Link>
            </div>
        )
        return jsx;
    }
}