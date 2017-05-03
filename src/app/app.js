import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';

import Login from './views/login';
import Title from './views/title';

import { setUser } from './reducers/login';

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
        }
    }
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Title} />
                    <Route path="/login" component={Login} />
                </div>
            </Router>
        );
    }
}

const mapDispatchToProps = {
    setUser
}

export default connect(null, mapDispatchToProps)(App);