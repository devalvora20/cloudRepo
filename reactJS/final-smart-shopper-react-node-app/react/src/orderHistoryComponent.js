import React, { Component } from 'react';
import SmartShopperService from './smartShopperService';
import { Link } from 'react-router-dom';
export default class OrderHistoryComponent extends Component {
    userId;
    _service;
    constructor(props) {
        super(props);
        this._service = SmartShopperService.getService();
        this.userId = this.props.match.params.userId;
        this.state = {
            orderHistory: null
        }
        console.log(this.userId);
        this.getOrderHistory(this.userId);
    }
    getOrderHistory(userId) {
        this._service.getOrderHistory(userId).then(response => response.json())
            .then(data => {

                console.log(data);
                this.setState({
                    orderHistory: data
                })
            }
            );
    }
    render() {
        if (this.state.orderHistory != null) {
            var previousOrdersList = this.state.orderHistory.map(function (order, index) {
                return (
                    <div key={index}>
                    <li>
                        <b>Order Id:</b> {order.orderId}
                        <ol  className="list-group">
                        {order.items.map((item,index) => {
                            return (
                                <li key={index}  className="list-group-item list-group-item-light">{item.name}
                                <span className="badge badge-primary badge-pill">{item.quantity}</span>
                                </li>
                            );
                        })}
                        </ol>
                    </li>
                    <br/>
                    </div>
                );
            });
        }
        var jsx = (
            <div>
                <link data-require="bootstrap-css@3.3.6" data-semver="3.3.6" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.css" />
                <div style={{ height: '50px', backgroundColor: '#F6F4F4', fontSize: '18px', padding: '8px', borderBottomLeftRadius: "5px", boxShadow: "1px 2px #D8D8D8", borderBottomRightRadius: "5px", marginRight: '6px' }}>
                    <Link to="/" style={{ cursor: 'pointer', fontWeight: '450', marginLeft: '10px', color: '#686767' }}>Smart Shopper</Link>&nbsp;
                </div><br />
                <h4>Order History</h4>
                <ol>
                    {previousOrdersList}
                </ol>
                <br />
            </div>);
        return jsx;
    }
}