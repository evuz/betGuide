import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Drawer } from 'material-ui';
import { connect } from 'react-redux';
import { toogleVisibilityDrawer, setVisibilityDrawer } from '../../reducers/layout';

import styles from './styles';

class Layout extends Component {
  componentWillUnmount() {
    this.props.setVisibilityDrawer(false);
  }

  render() {
    const { header, children, layout: { visibilityDrawer }, docked, containerStyle } = this.props;
    return (
      <div style={styles.layoutComponent}>
        {header ?
          <header>
            {header}
          </header>
          : null
        }
        <main style={styles.main}>
          <section
            style={containerStyle ?
              Object.assign({}, styles.container, containerStyle) : styles.container}
          >
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
