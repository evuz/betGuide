import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import { fetchUserPicks } from '../../reducers/picks';

class MonthPicks extends Component {
  componentWillMount() {
    const { picks: { month } } = this.props;
    if (month) this.props.fetchUserPicks(month);
  }

  render() {
    const { picks: { picks } } = this.props;

    console.log(picks);
    return (
      <Layout
        header={<Header />}
      >
        <h1>Details</h1>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  picks: state.picks,
});

const mapDispatchToProps = {
  fetchUserPicks,
};

export default connect(mapStateToProps, mapDispatchToProps)(MonthPicks);
