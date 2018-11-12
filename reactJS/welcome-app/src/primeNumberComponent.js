import React, { Component } from 'react';
import PrimeNumberService from './primeNumberService';
export default class PrimeNumberComponent extends Component {
    _service;
    constructor() {
        super();
        this._service=new PrimeNumberService();
        this.state = {
            isNumberPrime: null
        }
    }

    numberChange = (e) => {
        var event = e.target.value;
        var isPrime=this._service.isNumberPrime(event);
        this.setState({
            isNumberPrime: isPrime
        });
    }
    render() {
        var jsx = (
            <div>
                is number prime?&nbsp;
                <input type='number' style={{ backgroundColor: this.state.isNumberPrime === null ? 'lightgrey' : this.state.isNumberPrime ? 'green' : 'red', color: 'white' }} onChange={this.numberChange} />
            </div>
        );
        return jsx;
    }
}