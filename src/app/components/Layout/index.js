import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Drawer } from 'material-ui';
import { connect } from 'react-redux';
import { toogleVisibilityDrawer, setVisibilityDrawer } from '../../reducers/layout';

import './index.scss';

class Layout extends Component {
  componentWillUnmount() {
    this.props.setVisibilityDrawer(false);
  }

  render() {
    const { header, children, layout: { visibilityDrawer }, docked } = this.props;
    return (
      <div className="layout-component">
        {header ?
          <header>
            {header}
          </header>
          : null
        }
        <main>
          <section className="container">
            {children}
          </section>
          {docked ?
            <Drawer
              docked={false}
              width={200}
              open={visibilityDrawer}
              onRequestChange={() => this.props.toogleVisibilityDrawer()}
            >
              {docked}
            </Drawer> : null
          }
        </main>
      </div>
    );
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
};

const mapStateToProps = state => ({
  layout: state.layout,
});

const mapDispatchToProps = {
  toogleVisibilityDrawer,
  setVisibilityDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
