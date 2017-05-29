import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import ListPicks from '../../components/ListPicks';
import { fetchUserPicks } from '../../reducers/picks';

class MonthPicks extends Component {
  componentWillMount() {
    const { picks: { month } } = this.props;
    if (month) this.props.fetchUserPicks(month);
  }

  render() {
    const { picks: { picks, month } } = this.props;

    return (
      <Layout
        header={<Header />}
      >
        <ListPicks
          picks={picks}
          monthId={month}
        />
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
