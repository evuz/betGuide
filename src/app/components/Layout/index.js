import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import './index.scss';

const Layout = (props) => {
  const { header, children } = props;

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
      </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
};

const mapStateToProps = state => ({
  layout: state.layout,
});

export default connect(mapStateToProps)(Layout);
