import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const { menuIcon } = this.props;
    return (
      <div className="header-component">
        <AppBar
          title="Title"
          showMenuIconButton={menuIcon === undefined ? false : menuIcon}
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
