import React, { Component } from 'react';
export default class WelcomeComponent extends Component {
    render() {
        var jsx = (


            <div style={{ borderTopRightRadius: '5px', borderTopLeftRadius: '5px', border: '2px solid rgb(72, 134, 248)' }}>
                <div style={{ padding: '10px', backgroundColor: 'rgb(72, 134, 248)', borderTopLeftRadius: '2px', borderTopRightRadius: '2px' }}>
                    <span style={{fontSize: '24px',color:'white'}}>Welcome</span>
                </div>
                <div style={{ textAlign: 'center' }} >
                    <img alt="" width="500px" height="400px" src="./images/logo.jpg" /><br/>
                    <span style={{ color: 'grey', textAlign: 'center' }}>Developed by:</span><br /><br />
                    <i >devalvora1996@gmail.com</i><br /><br />
                </div>
            </div>

        );
        return jsx;
    }
}