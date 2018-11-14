import React from 'react';
import ReactDOM from 'react-dom';
import HomeComponent from './home';
import AboutComponent from './about';
import CareerComponent from './career';
import { HashRouter, Link, Route } from 'react-router-dom';
const routeConfig = <HashRouter>

    <div>
        <div>
            <Link to="/">Home</Link> &nbsp;
            <Link to="/About">About</Link>&nbsp;
            <Link to="/Career">Career</Link>&nbsp;
        </div>
        <div id="content">
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/About" component={AboutComponent} />
            <Route exact path="/Career" component={CareerComponent} />
        </div>
    </div>

</HashRouter>;
ReactDOM.render(routeConfig, document.querySelector('#root'));