import React from 'react';
import { connect } from 'react-redux';
import StatsDetailsItem from './StatsDetailsItem';
import './index.scss';

const StatsDetails = (props) => {
  const { stats } = props;

  const statsRender = stats.map((stat, index) => (
    <StatsDetailsItem stat={stat} key={index} />
  ));

  return (
    <div className="stats_details_component">
      {statsRender}
    </div>
  );
};

const mapsStateToProps = state => ({
  stats: state.stats,
});

export default connect(mapsStateToProps)(StatsDetails);
