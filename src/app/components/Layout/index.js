import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import './index.scss';

const Layout = (props) => {
  const {
        layout: {
            visibilityAside,
        },
    header,
    children,
    footer,
     } = props;
  const aside = visibilityAside ? props.aside : null;

  return (
    <div className="layout-component">
      {header ?
        <header>
          {header}
        </header>
        : null
      }
      <main>
        {aside ?
          <aside>
            {aside}
          </aside>
          : null
        }
        <section className="container">
          {children}
        </section>
      </main>
      <footer>
        {footer ?
          <div className="footer-layout">
            {footer}
          </div>
          : null
        }
      </footer>
    </div>
  );
};

Layout.propTypes = {
  aside: PropTypes.node,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  header: PropTypes.node,
};

const mapStateToProps = state => ({
  layout: state.layout,
});

export default connect(mapStateToProps)(Layout);
