import React from 'react';
import styles from '../styles/textReveal.module.css'
const TextReveal = () => {
    return (
        <h1 className= {styles.rtext}>
            <span>Simple text reveal with css</span>
            <span>using pseudo elements</span>
        </h1>
    );
};

export default TextReveal;