import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Head from 'next/head'
const App = ({ Component }) => {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>용문산 허브 찜질방</title>
            </Head>
            <Component />
        </div>
    );
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default App;