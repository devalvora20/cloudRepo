import React, { Component } from 'react';
export default class ToggleButtonComponent extends Component {
    color;
    constructor(props) {
        super(props);
        this.state = ({
            color: this.props.offColor
        })
    }
    toggleClick = () => {
        
        if (this.state.color === this.props.offColor)
            this.setState({
                color: this.props.onColor
            })
        else
            this.setState({
                color: this.props.offColor
            })

        this.props.onToggleClick("toggle button clicked");
    }
    render() {
        var jsx = (
            <div style={{ padding: 10 }}>
                <button className='btn' style={{ backgroundColor: this.state.color, color: 'white' }} onClick={this.toggleClick}>{this.props.textContent}</button>
            </div>
        );
        return jsx;
    }
}