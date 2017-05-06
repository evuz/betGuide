import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { toogleVisibilityAside } from '../../reducers/layout';
import { logOut } from '../../reducers/login';
import { MdMenu } from 'react-icons/lib/md'

import './index.scss';

class Header extends Component {
    constructor() {
        super();
        this.toogleAsideMenu = this.toogleAsideMenu.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    toogleAsideMenu(event) {
        event.preventDefault();
        this.props.toogleVisibilityAside();
    }

    handleLogOut (e) {
        e.preventDefault();

        const res = confirm('Do you want log out?');
        if (res) this.props.logOut();
    }

    render() {
        const { user } = this.props;
        return (
            <div className="header-component">
                <div className="left">
                    <MdMenu className="icon" onClick={this.toogleAsideMenu} />
                </div>
                <div className="right">
                    {
                        user.email ? 
                        <a href="#" onClick={this.handleLogOut}>{user.displayName}</a> : 
                        <Link to="/login" className="btn">Sign In</Link>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { user } = state.login;
    return {
        user
    }
}

const mapDispatchToProps = {
    toogleVisibilityAside,
    logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);