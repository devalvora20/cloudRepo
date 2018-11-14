import React, { Component } from 'react';
import ProductDataService from './productDataService';
import StarComponent from './starComponent';
import { Link } from 'react-router-dom';
export default class ProductDetailComponent extends Component {
    constructor(props) {
        super(props);
        this._service = new ProductDataService();
        this.state = {
            product: null
        }
        this.getProduct(this.props.match.params.id);
    }
    getProduct(id) {
        this._service.getProduct(id, this.productDetail.bind(this));
    }
    productDetail(product1) {
        console.log(product1);
        this.setState({
            product: product1
        })
    }
    render() {
        if (this.state.product != null) {
            var jsx = (
                <div style={{ borderTopRightRadius: '5px', borderTopLeftRadius: '5px', border: '2px solid rgb(72, 134, 248)' }}>
                    <div style={{ padding: '10px', backgroundColor: ' rgb(72, 134, 248)', borderTopLeftRadius: '2px', borderTopRightRadius: '2px' }}>
                        <span style={{ fontSize: '24px', color: 'white' }}>Product Detail: {this.state.product.productName}</span>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div style={{ margin: '20px'}}>
                                <table style={{ width: '100%' ,fontSize:'22px'}}>
                                    <tr>
                                        <th>Name:</th>
                                        <td>{this.state.product.productName}</td>
                                    </tr>
                                    <tr>
                                        <th>Code:</th>
                                        <td>{this.state.product.productCode}</td>
                                    </tr>
                                    <tr style={{ margin: '30px' }}>
                                        <th>Description:</th>
                                        <td>{this.state.product.description}</td>
                                    </tr>
                                    <tr style={{ margin: '30px' }}>
                                        <th>Availability:</th>
                                        <td>{this.state.product.releaseDate}</td>
                                    </tr>
                                    <tr style={{ margin: '30px' }}>
                                        <th>Price:</th>
                                        <td>{this.state.product.price}</td>
                                    </tr>
                                    <tr style={{ margin: '30px' }}>
                                        <th>5 Star Rating:</th>
                                        <td><StarComponent rating={this.state.product.starRating} /></td>
                                    </tr>
                                </table>

                            </div>
                        </div>
                        <div className="col-md-6"><div style={{ margin: '40px',textAlign:'center' }}><img alt="" src={this.state.product.imageUrl} width="250px" height="250px" /></div></div>
                    </div>
                    <div style={{ backgroundColor: 'rgb(243, 243, 243)', padding: '16px' }}>
                        <Link to="/productList" className="btn btn-default">&#9664; Back</Link>
                    </div>
                </div>
            );
        }
        else {
            jsx = null;
        }
        return jsx;
    }
}