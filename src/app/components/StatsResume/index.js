import React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText } from 'material-ui';

import styles from './styles';

const StatsResume = (props) => {
  const { stats: { stats } } = props;
  let resumeTotalPicks = 0;
  let resumeTotalProfit = 0;

  stats.forEach((stat) => {
    const { winPicks, lostPicks, voidPicks, profits } = stat;
    resumeTotalPicks += winPicks + lostPicks + voidPicks;
    resumeTotalProfit += profits;
  });
  return (
    <div style={styles.statsResumeComponent}>
      <Card>
        <CardHeader
          title="Resume"
        />
        <CardText>
          <p>Resume Total Picks: {resumeTotalPicks}</p>
          <p>Resume Total Profit: {resumeTotalProfit.toFixed(2)}</p>
        </CardText>
      </Card>
    </div>
  );
};

const mapStateToProps = state => ({
  stats: state.stats,
});

export default connect(mapStateToProps)(StatsResume);
