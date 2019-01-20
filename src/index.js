import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App/index';
import About from './components/About/index';
import NotFound from './components/NotFound/index';
import './index.css';

ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/about" component={About}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>, 
    document.getElementById('root')
);
