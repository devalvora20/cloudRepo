import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'
export default class StarComponent extends Component {
    render() {
        var jsx = (
            <div style={{ padding: '2px' }}>
            <link data-require="bootstrap-css@3.3.6" data-semver="3.3.6" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.css" />
                <div data-tip={this.props.rating+' stars'} style={{ overflow: 'hidden', textAlign: 'center', width: 14 * this.props.rating, height: 22 }} >
                    <div style={{overflow: 'hidden', width: 14 * this.props.rating, height: 22 }} >
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                    </div>
                </div>
                <ReactTooltip place='right'/>
            </div>
        );
        return jsx;
    }
}
