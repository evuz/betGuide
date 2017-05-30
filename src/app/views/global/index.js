import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import StatsDetails from '../../components/StatsDetails';
import StatsResume from '../../components/StatsResume';
import { setUserStats, fetchUserStats } from '../../reducers/stats';

import styles from './styles';

class GlobalView extends Component {
  componentWillMount() {
    this.props.fetchUserStats();
  }

  render() {
    return (
      <Layout header={<Header />} >
        <div style={styles.globalView}>
          <StatsResume />
          <StatsDetails />
        </div>
        <FloatingActionButton
          style={styles.floatButton}
          onTouchTap={() => this.props.push('/addPick')}
        >
          <ContentAdd />
        </FloatingActionButton>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  setUserStats,
  push,
  fetchUserStats,
};

export default connect(null, mapDispatchToProps)(GlobalView);
