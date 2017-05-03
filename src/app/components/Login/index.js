import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Spinner from './Spinner';

import { toogleDisplayRegister, signUp, signIn } from '../../reducers/login';

import './index.scss';

class Login extends Component {
    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDisplay = this.handleDisplay.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { isDisplayRegister, userData } = this.props.login;

        if (isDisplayRegister) {
            this.props.signUp(userData)
        } else {
            const { username, password } = userData
            this.props.signIn({
                username,
                password
            })
        }
    }

    handleDisplay(e) {
        e.preventDefault();
        this.props.toogleDisplayRegister();
    }

    handleKeyUp (e) {
        if (e.key === 'Enter') {
            this.handleSubmit(e);
        }
    }

    render() {
        const { isDisplayRegister, userData, userErrors, fetching } = this.props.login;
        const textPlaceholder = isDisplayRegister ? 'Username' : 'Username or e-mail';
        return (
            <div className="login-component">
                <form onKeyUp={this.handleKeyUp}>
                    {fetching ? <div className="overlay-loading"><Spinner/></div> : null}
                    {isDisplayRegister ? <Input type="email" placeholder="E-mail"
                        value={userData.email} name="email" error={userErrors.email} /> : null}
                    <Input type="text" placeholder={textPlaceholder}
                        value={userData.username} name="username" error={userErrors.username} />
                    <Input type="password" placeholder="Password"
                        value={userData.password} name="password" error={userErrors.password} />
                    <div className="button-box">
                        <a href="#" className="btn-register" onClick={this.handleDisplay}>{isDisplayRegister ? 'Sign In' : 'Sign Up'}</a>
                        <a href="#" className="btn-login" onClick={this.handleSubmit}>{isDisplayRegister ? 'Register' : 'Log In'}</a>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    login: state.login
})

const mapDispatchToProps = {
    toogleDisplayRegister,
    signIn,
    signUp
}

Login.propTypes = {
    toogleDisplayRegister: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    login: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);