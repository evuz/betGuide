import React from 'react';

import Header from '../../components/Header';
import Layout from '../../components/Layout';

import './index.scss';

const TitlePage = () => (
  <Layout
    header={<Header />}
  >
    <h1>TitlePage</h1>
  </Layout>
);

export default TitlePage;
