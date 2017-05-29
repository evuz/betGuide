import React from 'react';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Login from '../../components/Login';

const LoginView = () => (
  <Layout
    header={<Header />}
  >
    <Login />
  </Layout>
);

export default LoginView;
