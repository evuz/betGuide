import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { saveDataUser } from '../../../reducers/login';

import './index.scss';

class Input extends Component {
    constructor() {
        super();

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.props.saveDataUser({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { type, placeholder, value, name, error } = this.props;
        return (
            <div className="login-input-component">
                <input type={type} placeholder={placeholder} autoComplete="false"
                    onChange={this.handleInputChange} value={value} name={name} />
                <span className="error">{error}</span>
            </div>
        );
    }
}

const mapDispatchToProps = {
    saveDataUser
}

Input.propTypes = {
    saveDataUser: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(Input);
