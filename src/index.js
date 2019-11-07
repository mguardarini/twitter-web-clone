import React from 'react';
import ReactDOM from 'react-dom';
import Login from './screens/Login/login';
import Dashboard from './screens/Dashboard/dashboard';

import * as serviceWorker from './serviceWorker';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    </ BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
