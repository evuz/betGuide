import React from 'react';

import './index.scss';

const StatsDetailsItem = props => {
    const { id, avgOdd, avgStake, totalPicks, totalProfit } = props.stat;
    const [, month, year] = id.split(/[a-z]/);
    const date = new Date(year, month);
    const monthStr = date.toLocaleDateString('en', {month: 'long'});

    return (
        <div className="stats_details_component_item">
            <h1>{monthStr + ' ' + year}</h1>
            <p>{totalProfit}</p>
            <p>{totalPicks}</p>
        </div>
    )
}

export default StatsDetailsItem;