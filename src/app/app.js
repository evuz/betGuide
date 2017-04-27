import React, { Component } from 'react';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import Login from './components/Login';

import './app.scss';

class App extends Component {
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

export default App;