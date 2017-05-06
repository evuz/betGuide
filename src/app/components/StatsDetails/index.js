import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.scss'

class StatsDetails extends Component {
    render() {
        const { stats } = this.props;

        const statsRender = stats.map(stat => {
            const { id, avgOdd, avgStake, totalPicks, totalProfit } = stat;
            let month = id.split('m').pop();
            let day = month.split('y')[0];
            month = month.split('y').pop();
            return (
                <div className="stat_item">
                    <h1>{month + '-' + day}</h1>
                    <p>{totalProfit}</p>
                    <p>{totalPicks}</p>
                </div>
            )
        })

        return (
            <div className="stats_component">
                {statsRender}
            </div>
        );
    }
}

const mapsStateToProps = state => ({
    stats: state.stats
})

export default connect(mapsStateToProps)(StatsDetails);