import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatButton } from 'material-ui';
import { logOut } from '../../../reducers/login';

class ButtonRight extends Component {
  constructor() {
    super();
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(e) {
    e.preventDefault();

    const res = confirm('Do you want log out?');
    if (res) this.props.logOut();
  }

  render() {
    const { user } = this.props;
    return (
      user.email ?
        <FlatButton
          label={user.displayName}
        /> :
        <FlatButton
          label="LogIn"
        />
    );
  }
}

const mapStateToProps = state => ({
  user: state.login.user,
});

const mapDispatchToProps = {
  logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonRight);
