import React, { Component } from 'react';
import StudentComponent from './studentComponent';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default class WelcomeComponent extends Component {
    floatToDecimal(no) {
        return Math.round(no * 100) / 100;
    }
    render() {
        var jsx = (<div>
            {/* {22/7} */}
            {this.floatToDecimal(22 / 7)}
            <StudentComponent/>
        </div>
        );
        return jsx;
    }
}