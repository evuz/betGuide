import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import CreatePick from '../../components/CreatePick';

import styles from './styles';

const AddPick = () => (
  <Layout
    header={<Header />}
    containerStyle={styles.addPicksComponent}
  >
    <CreatePick />
  </Layout>
);

export default AddPick;
