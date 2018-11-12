import React, { Component } from 'react';
export default class BlueButtonGameComponent extends Component {
    buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    gameOver = false;

    msg;
    a = [];
    constructor() {
        super();
        var blueBtn1 = Math.floor(1 + Math.random() * (25 - 1));
        this.state = {
            attempts: 5,
            blueBtn: blueBtn1
        }

    }

    click = (btn) => {
        var attempts1 = this.state.attempts;
        attempts1--;
        this.setState({
            attempts: attempts1
        });
        var col = this.state.blueBtn === btn ? 'blue' : btn < this.state.blueBtn ? 'red' : 'green';
        this.a[btn] = {
            backgroundColor: col,
            pointerEvents: 'none',
        }
        if (this.state.blueBtn === btn) {
            this.gameOver = true;
            this.msg = "you win!";
        }
        else if (this.state.attempts <= 1) {
            this.gameOver = true;
            this.msg = "Game Over, you lose!";
            this.a[this.state.blueBtn] = {
                backgroundColor: 'blue',
                pointerEvents: 'none'
            }
        }
    }
    reset() {
        window.location.reload();
    }
    render() {

        var buttons = this.buttons.map(function (btn) {
            return (
                <span>
                    <button onClick={() => { this.click(btn) }} disabled={this.gameOver} style={this.a[btn]} className='btn'>{btn}</button>
                    {btn % 5 === 0 ? <br /> : null}
                </span>
            );
        }.bind(this));
        var jsx = (
            <div>
                <span>
                    <style>{`
                button {
                    background-color: grey;
                    width: 90px;
                    height: 90px;
                    margin:5px;
                    color:white;
                }
              `}</style>
                </span>
                <h3>Attempts Remaining: {this.state.attempts}</h3><br />
                {buttons}
                <span style={{ color: 'white', margin: '5px' }} className="btn btn-primary" hidden={!this.gameOver} onClick={this.reset.bind(this)}>Reset</span>
                <br />
                <h2>{this.msg}</h2>
            </div>);
        return jsx;
    }
}