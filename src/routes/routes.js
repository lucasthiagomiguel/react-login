import React from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../store/store'

import { history } from '../history';

import Login from '../pages/Login';
import RecuperarSenha from '../pages/RecuperarSenha';
import Dashboard from '../pages/Dashboard';
import User from '../pages/User';

import baseLogin from '../containers/login';
import baseDashboard from '../containers/dashboard';

export default function Routes() {
    return (
        <Provider store={store}>
            <Router history={history}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={baseLogin(Login)} />
                    <Route path="/recuperar-senha" exact component={baseLogin(RecuperarSenha)} />
                    <Route path="/dashboard" exact component={baseDashboard(Dashboard)} />
                    <Route path="/user" exact component={baseDashboard(User)} />
                </Switch>
            </BrowserRouter>
            </Router>
        </Provider>
    );
}