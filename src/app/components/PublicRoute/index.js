import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = (props) => {
    const { user, component: Component, path, initApp} = props;
    console.log(props);
    return (
        !initApp ? null : <Route path={path} render={props => (
            !user.email ? (
                <Component />
            ) : (
                    <Redirect to={{
                        pathname: '/'
                    }} />
                )
        )} />
    )
}

const mapStateToProps = state => ({
    user: state.login.user,
    initApp: state.app.initApp
})

export default connect(mapStateToProps)(PublicRoute);