import React from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../store/store'

import { history } from '../history';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Dashboard from '../pages/Dashboard';
import User from '../pages/User';
import Ecovias from '../pages/Operacao/ecovias';
import Ecopistas from '../pages/Operacao/ecopistas';
import EditarOperacao from '../pages/Operacao/editarOperacao';

import baseLogin from '../containers/login';
import baseDashboard from '../containers/dashboard';
import baseCadastro from '../containers/cadastro';

export default function Routes() {
    return (
        <Provider store={store}>
            <Router history={history}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={baseLogin(Login)} />
                    <Route path="/cadastro" exact component={baseCadastro(Cadastro)} />
                    <Route path="/ecovias" exact component={baseDashboard(Ecovias)} />
                    <Route path="/ecopistas" exact component={baseDashboard(Ecopistas)} />
                    <Route path="/editar" exact component={baseDashboard(EditarOperacao)} />
                    <Route path="/dashboard" exact component={baseDashboard(Dashboard)} />
                    <Route path="/user" exact component={baseDashboard(User)} />
                </Switch>
            </BrowserRouter>
            </Router>
        </Provider>
    );
}