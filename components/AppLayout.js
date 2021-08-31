import React from 'react';
import PropTypes from 'prop-types'
import { Global } from '../styles/mainStyle';
import styles from '../styles/main.module.css';
import NavBar from './navBar';


const AppLayout = ({ children }) => {
    return (
        <div>
            <Global/>
            <NavBar/>
            <main className={styles.content}>
                {children}
            </main>
            <footer style={{ textAlign: 'center' , backgroundColor:"gray"}}>풋터 예시</footer>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;