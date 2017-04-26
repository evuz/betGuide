import React from 'react';
import { connect } from 'react-redux';
import './index.scss';

const Layout = (props) => {
    const {
        layout: {
            visibilityAside
        },
        header,
        children,
        footer
     } = props;
    const aside = visibilityAside ? props.aside : null;
    
    return (
        <div className="layout">
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
    )
}

const mapStateToProps = state => ({
    layout: state.layout
})

export default connect(mapStateToProps)(Layout);