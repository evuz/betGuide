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

import './index.scss';

class GlobalView extends Component {
  componentWillMount() {
    this.props.fetchUserStats();
  }

  render() {
    return (
      <Layout header={<Header />} >
        <div className="global_view">
          <StatsResume />
          <StatsDetails />
        </div>
        <FloatingActionButton
          style={styles.floatButton}
          onTouchTap={() => this.props.push('/monthStats')}
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

const styles = {
  floatButton: {
    position: 'absolute',
    bottom: '50px',
    right: '50px',
  },
};

export default connect(null, mapDispatchToProps)(GlobalView);
