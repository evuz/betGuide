import React from 'react';
import { connect } from 'react-redux';
import StatsDetailsItem from './StatsDetailsItem';
import styles from './styles';

const StatsDetails = (props) => {
  const { stats: { stats } } = props;

  const statsRender = stats.map((stat, index) => (
    <StatsDetailsItem stat={stat} key={index} />
  ));

  return (
    <div style={styles.statsDetailsComponent}>
      {statsRender}
    </div>
  );
};

const mapsStateToProps = state => ({
  stats: state.stats,
});

export default connect(mapsStateToProps)(StatsDetails);
