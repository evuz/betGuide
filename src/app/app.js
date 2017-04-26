import React, { Component } from 'react';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';

import './app.scss';

class App extends Component {
    render() {
        return (
            <Layout
                aside={<Aside />}
                footer={<Footer />}
                header={<Header />}
            >
            Hola
            </Layout>
        );
    }
}

export default App;