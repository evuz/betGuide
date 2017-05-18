import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import StatsDetails from '../../components/StatsDetails';
import StatsResume from '../../components/StatsResume';

import { setUserStats } from '../../reducers/stats';
import config from '../../../config';

import './index.scss';

class GlobalView extends Component {
    componentWillMount() {
        fetch(config.serverUrl + 'api/userstats', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
            },
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) return;
                this.props.setUserStats(res.payload);
            })
    }

    render() {
        const {stats} = this.props;
        return (
            <Layout header={<Header />} >
                <div className="global_view">
                    <div className="stats_panel">
                        <StatsDetails/>
                        <StatsResume />
                    </div>                    
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    stats: state.stats
})

const mapDispatchToProps = {
    setUserStats
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalView);