import React, { Component } from 'react';
export default class TwoWayBindingComponent extends Component {
    constructor(){
        super();
        this.state={
            msg:""
        }
    }
    msgChange=(e) =>{ 
        this.setState({
            msg:e.target.value
        });
      }
    render() {
        var jsx = (
            <div>
                <h3>{this.state.msg}</h3><br/>
                <input type="text" onChange={this.msgChange} placeholder="Enter something..."/>
            </div>
        );
        return jsx;
    }
}