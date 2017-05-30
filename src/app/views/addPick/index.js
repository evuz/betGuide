import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';

import styles from './styles';

const AddPick = () => (
  <Layout
    header={<Header />}
    containerStyle={styles.addPicksComponent}
  >
    <div>{'Hola'}</div>
  </Layout>
);

export default AddPick;
