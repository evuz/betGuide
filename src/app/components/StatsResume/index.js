import React from 'react';
import { connect } from 'react-redux';

import './index.scss';

const StatsResume = (props) => {
  const { stats } = props;
  let resumeTotalPicks = 0;
  let resumeTotalProfit = 0;

  stats.forEach((stat) => {
    const { winPicks, lostPicks, voidPicks, profits } = stat;
    resumeTotalPicks += winPicks + lostPicks + voidPicks;
    resumeTotalProfit += profits;
  });

  return (
    <div className="stats_resume_component">
      <p>Total Picks: {resumeTotalPicks}</p>
      <p>Total Profit: {resumeTotalProfit}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  stats: state.stats,
});

export default connect(mapStateToProps)(StatsResume);
