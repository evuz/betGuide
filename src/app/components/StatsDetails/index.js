import React, { Component } from 'react';
import { connect } from 'react-redux';
import StatsDetailsItem from './StatsDetailsItem';
import { setMonthPicks } from '../../reducers/picks';

import styles from './styles';

class StatsDetails extends Component {
  constructor() {
    super();
    this.handleTap = this.handleTap.bind(this);
  }

  handleTap(id) {
    this.props.setMonthPicks(id);
  }

  render() {
    const { stats: { stats } } = this.props;

    const statsRender = stats.map((stat, index) => (
      <StatsDetailsItem stat={stat} key={index} handleTap={this.handleTap} />
    ));

    return (
      <div style={styles.statsDetailsComponent}>
        {statsRender}
      </div>
    );
  }
}

const mapsStateToProps = state => ({
  stats: state.stats,
});

const mapDispatchToProps = {
  setMonthPicks,
};

export default connect(mapsStateToProps, mapDispatchToProps)(StatsDetails);
