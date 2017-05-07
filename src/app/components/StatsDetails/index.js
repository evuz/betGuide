import React, { Component } from 'react';
import { connect } from 'react-redux';

import StatsDetailsItem from './StatsDetailsItem';

import './index.scss'

class StatsDetails extends Component {
    render() {
        const { stats } = this.props;

        const statsRender = stats.map((stat, index) => (
            <StatsDetailsItem stat={stat} key={index} />
        ))

        return (
            <div className="stats_details_component">
                {statsRender}
            </div>
        );
    }
}

const mapsStateToProps = state => ({
    stats: state.stats
})

export default connect(mapsStateToProps)(StatsDetails);