import React from 'react';

import Header from '../../components/Header';
import Layout from '../../components/Layout';

import './index.scss';

const GlobalView = () => (
    <Layout header={<Header />} >
        <h1>GlobalView</h1>
    </Layout>
)

export default GlobalView;