import React from 'react';
import { Card, CardText, CardHeader } from 'material-ui';
import './index.scss';

const StatsDetailsItem = (props) => {
  const { id, winPicks, lostPicks, voidPicks, profits } = props.stat;
  const date = new Date(parseInt(id, 10));
  const monthStr = date.toLocaleDateString('en', { month: 'long' });

  return (
    <div className="stats_details_component_item">
      <Card>
        <CardHeader
          title={`${monthStr} ${date.getFullYear()}`}
        />
        <CardText>
          <p>{profits}</p>
          <p>{winPicks + lostPicks + voidPicks}</p>
        </CardText>
      </Card>
      {
        // <h1>{`${monthStr} ${date.getFullYear()}`}</h1>
        // <p>{profits}</p>
        // <p>{winPicks + lostPicks + voidPicks}</p>
      }
    </div>
  );
};

export default StatsDetailsItem;
