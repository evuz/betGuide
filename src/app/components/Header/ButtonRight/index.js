import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
          style={style}
          onTouchTap={this.handleLogOut}
        /> :
        <FlatButton
          label="Sign In"
          style={style}
          containerElement={<Link to="/login" />}
        />
    );
  }
}

const style = {
  marginTop: '7px',
  fontWeight: 'bold',
  color: 'white',
  textAlign: 'center',
};

const mapStateToProps = state => ({
  user: state.login.user,
});

const mapDispatchToProps = {
  logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonRight);
