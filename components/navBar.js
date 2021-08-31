import React from 'react';
import styles from '../styles/navBar.module.css'
import { FacebookOutlined, CrownOutlined } from '@ant-design/icons'
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className={styles.nav_bar}>
            <div>
                <Link href="/">
                    <a>
                        <CrownOutlined />
                    </a>
                </Link>
            </div>
            <ul className={styles.menu}>
                <li>
                    <Link href="/restaurant"><a>허브식당</a></Link>
                </li>
                <li>
                    <Link href="/accomodate"><a>숙박</a></Link>
                </li>
                <li>
                    <Link href="/qna"><a>자주하는 질문</a></Link>
                </li>
                <li>
                    <Link href="/location"><a>오시는 길</a></Link>
                </li>
            </ul>
            <div>
                <FacebookOutlined />
            </div>
        </nav>
    );
};

export default NavBar;