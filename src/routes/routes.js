import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import history from '../history';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import baseLogin from '../containers/login';
import baseDashboard from '../containers/dashboard';
import { Provider } from 'react-redux';
import store from '../sotore/store';

export default function Routes(){
    return(
        <Provider store={store}>
            <BrowserRouter history={history}>
                <Switch>
                    <Route path="/" exact component={baseLogin(Login)} />
                    <PrivateRoute path="/dashboard" exact component={baseDashboard(Dashboard)} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}