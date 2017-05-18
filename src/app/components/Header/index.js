import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { AppBar } from 'material-ui';
import ButtonRight from './ButtonRight';
import { toogleVisibilityDrawer } from '../../reducers/layout';
import './index.scss';

class Header extends Component {
  constructor() {
    super();
    this.toogleDrawer = this.toogleDrawer.bind(this);
  }

  toogleDrawer(event) {
    event.preventDefault();
    this.props.toogleVisibilityDrawer();
  }

  render() {
    return (
      <div className="header-component">
        <AppBar
          title="Title"
          onLeftIconButtonTouchTap={this.toogleDrawer}
          iconElementRight={<ButtonRight />}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  toogleVisibilityDrawer,
};

export default connect(null, mapDispatchToProps)(Header);
