import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toogleVisibilityAside } from '../../reducers/layout';

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
            <div className="header">
                <a href="#" onClick={this.toogleAsideMenu}>Menú</a>
            </div>
        );
    }
}

const mapDispatchToProps = {
    toogleVisibilityAside
}

export default connect(null, mapDispatchToProps)(Header);