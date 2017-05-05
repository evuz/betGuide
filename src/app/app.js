import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import Login from './views/login';
import Title from './views/title';
import Global from './views/global';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import { setUser } from './reducers/login';
import { initApp } from './reducers/app';

import './app.scss';

class App extends Component {
    componentWillMount() {
        if (localStorage.token) {
            fetch('http://localhost:3001/api/signin', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.token
                },
            })
                .then(res => res.json())
                .then(res => {
                    this.props.setUser(res.user);
                })
        } else {
            this.props.initApp()
        }
    }
    render() {
        const { history } = this.props;
        return (
            <ConnectedRouter history={history}>
                <div id="app">
                    <Route exact path="/" component={Title} />
                    <PublicRoute path="/login" component={Login} />
                    <PrivateRoute path="/global" component={Global} />
                </div>
            </ConnectedRouter>
        );
    }
}

const mapDispatchToProps = {
    setUser,
    initApp
}

export default connect(null, mapDispatchToProps)(App);