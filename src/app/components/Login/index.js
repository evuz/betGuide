import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import {
  Card,
  CardText,
  CardActions,
  TextField,
  FlatButton,
  CircularProgress,
} from 'material-ui';
import { toogleDisplayRegister, signUp, signIn, saveDataUser, clearData } from '../../reducers/login';
import styles from './styles';

class Login extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.saveDataUser({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { isDisplayRegister, userData } = this.props.login;

    if (isDisplayRegister) {
      this.props.signUp(userData);
    } else {
      const { username, password } = userData;
      this.props.signIn({
        username,
        password,
      });
    }
  }

  handleDisplay(e) {
    e.preventDefault();
    this.props.clearData();
    this.props.toogleDisplayRegister();
  }

  handleKeyUp(e) {
    if (e.key === 'Enter') {
      this.handleSubmit(e);
    }
  }

  render() {
    const { isDisplayRegister, userData, userErrors, fetching } = this.props.login;
    const textPlaceholder = isDisplayRegister ? 'Username' : 'Username or e-mail';
    return (
      <div style={styles.loginComponent}>
        <Card style={styles.card} onKeyUp={this.handleKeyUp}>
          {
            fetching ?
              <div style={styles.overlayLoading}>
                <CircularProgress size={60} thickness={5} />
              </div> :
              null
          }
          <CardText>
            {isDisplayRegister ?
              <TextField
                hintText="E-mail"
                type="email"
                value={userData.email}
                name="email"
                errorText={userErrors.email}
                onChange={this.handleInputChange}
              /> : null}
            <TextField
              hintText={textPlaceholder}
              type="text"
              value={userData.username}
              name="username"
              errorText={userErrors.username}
              onChange={this.handleInputChange}
            />
            <TextField
              hintText="Password"
              type="password"
              value={userData.password}
              name="password"
              errorText={userErrors.password}
              onChange={this.handleInputChange}
            />
          </CardText>
          <CardActions style={styles.action}>
            <FlatButton
              label={isDisplayRegister ? 'Sign In' : 'Sign Up'}
              secondary
              onTouchTap={this.handleDisplay}
            />
            <FlatButton
              label={isDisplayRegister ? 'Register' : 'Log In'}
              primary
              onTouchTap={this.handleSubmit}
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = {
  toogleDisplayRegister,
  signIn,
  signUp,
  saveDataUser,
  clearData,
};

Login.propTypes = {
  toogleDisplayRegister: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  login: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
