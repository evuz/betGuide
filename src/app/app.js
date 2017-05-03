import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import Login from './components/Login';

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
            <Layout
                header={<Header />}
            >
                <Login />
            </Layout>
        );
    }
}

const mapDispatchToProps = {
    setUser
}

export default connect(null, mapDispatchToProps)(App);