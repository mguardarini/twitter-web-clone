import React from 'react';
import Login from '../screens/Login/login';
import Dashboard from '../screens/Dashboard/dashboard'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Login} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}