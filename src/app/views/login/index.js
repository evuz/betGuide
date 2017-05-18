import React from 'react';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Login from '../../components/Login';

import './index.scss';

const LoginView = () => (
  <Layout
    header={<Header />}
  >
    <Login />
  </Layout>
);

export default LoginView;
