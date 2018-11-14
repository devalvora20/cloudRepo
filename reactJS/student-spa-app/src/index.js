import React from 'react';
import ReactDOM from 'react-dom';
import HomeComponent from './home';
import AddComponent from './add';
import EditComponent from './edit';
import DeleteComponent from './delete';
import { HashRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const routeConfig = <HashRouter>

    <div style={{padding:'10px'}}>
        
        <div id="content">
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/Add" component={AddComponent} />
            <Route path="/edit:rollNo" component={EditComponent} />
            <Route exact path="/delete:rollNo" component={DeleteComponent} />
        </div>
    </div>

</HashRouter>;
ReactDOM.render(routeConfig, document.querySelector('#root'));
