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
        return (
            <div className="header-component">
                <div className="left">
                    <MdMenu className="icon" onClick={this.toogleAsideMenu} />
                </div>
                <div className="right">
                    <a href="#" className="btn">Sign In</a>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    toogleVisibilityAside
}

export default connect(null, mapDispatchToProps)(Header);