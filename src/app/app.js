import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import Login from './views/login';
import Title from './views/title';
import Global from './views/global';
import MonthPicks from './views/monthPicks';

import { setUser } from './reducers/login';
import { setInitApp } from './reducers/app';

import config from '../config';

import './app.scss';

class App extends Component {
  componentWillMount() {
    if (localStorage.token) {
      fetch(`${config.serverUrl}api/signin`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then(res => res.json())
        .then((res) => {
          if (res.error) localStorage.removeItem('token');
          else this.props.setUser(res.user);
          this.props.setInitApp();
        })
        .catch(() => this.props.setInitApp());
    } else {
      this.props.setInitApp();
    }
  }

  render() {
    const { history, app: { initApp }, user: { email } } = this.props;
    return (
      !initApp ? null :
      <ConnectedRouter history={history}>
        <MuiThemeProvider>
          <div id="app">
            <Route exact path="/" component={email ? Global : Title} />
            <Route path="/login" component={email ? () => (<Redirect to={'/'} />) : Login} />
            <Route path="/monthStats" component={!email ? () => (<Redirect to={'/'} />) : MonthPicks} />
          </div>
        </MuiThemeProvider>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app,
  user: state.login.user,
});

const mapDispatchToProps = {
  setUser,
  setInitApp,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
