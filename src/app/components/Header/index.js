import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toogleVisibilityAside } from '../../reducers/layout';
import { MdMenu } from 'react-icons/lib/md'

import './index.scss';

class Header extends Component {
    constructor() {
        super();
        this.toogleAsideMenu = this.toogleAsideMenu.bind(this);
    }

    toogleAsideMenu(event) {
        event.preventDefault();
        this.props.toogleVisibilityAside();
    }

    render() {
        const { user } = this.props;
        return (
            <div className="header-component">
                <div className="left">
                    <MdMenu className="icon" onClick={this.toogleAsideMenu} />
                </div>
                <div className="right">
                    {user.email ? user.displayName : <a href="#" className="btn">Sign In</a> }
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
    toogleVisibilityAside
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);