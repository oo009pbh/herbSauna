import React from 'react';
import styles from '../styles/main.module.css'

const MainSect3 = () => {
    return (
        <section className={styles.section3}>
            <article className={styles.facilityImage}>
                <div>
                </div>
            </article>
            <article className={styles.facilities}>
                <li>시설목록</li>
                <li>허브식당</li>
                <li>족욕실</li>
                <li>수면실</li>
                <li>놀이방</li>
                <li>샤워실</li>
                <li>테라스</li>
            </article>
        </section>
    );
};

export default MainSect3;