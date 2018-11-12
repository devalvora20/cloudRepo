import React, { Component } from 'react';
export default class NumbersApiComponent extends Component {
    constructor() {
        super();
        this.state = {
            number: null,
            facts: []
        }
    }
    getFact = () => {
        fetch('http://numbersapi.com/' + this.state.number + '?json')
            .then(response => response.json())
            .then(data => {
                var f = this.state.facts;
                f.push(data.text);
                this.setState({
                    facts: f
                })
            }
            );
    }
    numberChange = (e) => {
        this.setState(
            {
                number: e.target.value
            }
        );
    }
   
    render() {
        // var col='#'+Math.floor(Math.random()*16777215).toString(16);
        var listFacts = this.state.facts.map(function (fact1) {
            return (
            <div style={{margin:8,backgroundColor:'#'+Math.floor(Math.random()*16777215).toString(16)}} class="card">
                    <div class="card-body">{ fact1 }</div>
                </div>
            );
        });
        var jsx = (
            <div style={{ padding: 13 }}>
                <div className='form-inline'>
                    <label>Number:</label>
                    <input type='number' className="form-control" value={this.state.number} onChange={this.numberChange} /><br />
                    <button className='btn btn-primary' onClick={this.getFact}>Fact!</button>
                </div>
                <br />

                {listFacts}

            </div>

        );
        return jsx;
    }
}