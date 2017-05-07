import React from 'react';

import './index.scss';

const StatsDetailsItem = props => {
    const { id, avgOdd, avgStake, totalPicks, totalProfit } = props.stat;
    let month = id.split('m').pop();
    let day = month.split('y')[0];
    month = month.split('y').pop();
    return (
        <div className="stats_details_component_item">
            <h1>{month + '-' + day}</h1>
            <p>{totalProfit}</p>
            <p>{totalPicks}</p>
        </div>
    )
}

export default StatsDetailsItem;