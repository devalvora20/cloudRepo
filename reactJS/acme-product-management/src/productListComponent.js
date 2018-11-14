import React, { Component } from 'react';
import ProductDataService from './productDataService';
import StarComponent from './starComponent';
import { Link } from 'react-router-dom';
export default class ProductListComponent extends Component {
    _service;
    allProducts;
    constructor() {
        super();
        this._service = new ProductDataService();
        this.getProducts();
        this.state = {
            products: null,
            imgHidden:true
        }
    }
    getProducts() {
        this._service.getProducts()
            .then(response => response.json())
            .then(data => {
                this.allProducts=data;
                this.setState({
                    products: data
                });
            }
            );
    }
    imgToggle=()=>{
        let imgHide=this.state.imgHidden;
        this.setState({
            imgHidden:!imgHide
        })
    }
    filter=(event)=>{
        let count=0;
        let filterName=event.target.value;
        let prods=[];
        for(let i=0;i<this.allProducts.length;i++){
            if (this.allProducts[i].productName.toUpperCase().includes(filterName.toUpperCase())) {
                prods[count++] = this.allProducts[i];
            }
        }
        this.setState({
            products:prods
        })
    }
    render() {
        if (this.state.products != null) {
            console.log(this.state.products);
            var productList = this.state.products.map(function (product, index) {
                return (
                    <tr>
                        <td style={{textAlign:'center',verticalAlign:'center'}}><img hidden={this.state.imgHidden} alt="" src={product.imageUrl} width="40px" height="40px" /></td>
                        <td><Link to={'/productDetail'+product.productId} >{product.productName}</Link></td>
                        <td>{product.productCode}</td>
                        <td>{product.releaseDate}</td>
                        <td>${product.price}</td>
                        <td><StarComponent rating={product.starRating} /></td>
                    </tr>
                );
            }.bind(this));
        }
        var jsx = (

            <div style={{ borderTopRightRadius: '5px', borderTopLeftRadius: '5px', border: '2px solid rgb(72, 134, 248)' }}>
                <div style={{ padding: '10px', backgroundColor: 'rgb(72, 134, 248)', borderTopLeftRadius: '2px', borderTopRightRadius: '2px' }}>
                    <span style={{ fontSize: '24px', color: 'white', }}>Product List</span>
                </div>
                <div style={{ margin: '6px' }}>
                    Filter by: <input type="text" onChange={this.filter}/>
                    <br /><br />
                    <table className="table table-condensed">
                        <tr style={{ color: 'rgb(72, 134, 248)' }}>
                            <th><button className="btn btn-primary" onClick={this.imgToggle}>{this.state.imgHidden?'Show Image':'Hide Image'}</button></th>
                            <th>Product</th>
                            <th>Code</th>
                            <th>Available</th>
                            <th>Price</th>
                            <th>5 Star Rating</th>
                        </tr>
                        {productList}
                    </table>
                </div>
            </div>
        );
        return jsx;
    }
}