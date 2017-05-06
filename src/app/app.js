import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
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
                    if (res.error) return localStorage.removeItem('token');
                    this.props.setUser(res.user);
                    this.props.initApp()
                })
        } else {
            this.props.initApp()
        }
    }

    render() {
        const { history, app: { initApp }, user: { email } } = this.props;
        return (
            !initApp ? null :
                <ConnectedRouter history={history}>
                    <div id="app">
                        <Route exact path="/" component={email ? Global : Title} />
                        <Route path="/login" component={email ? () => (<Redirect to={'/'} />) : Login} />
                    </div>
                </ConnectedRouter>
        );
    }
}

const mapStateToProps = state => ({
    app: state.app,
    user: state.login.user
})

const mapDispatchToProps = {
    setUser,
    initApp
}

export default connect(mapStateToProps, mapDispatchToProps)(App);