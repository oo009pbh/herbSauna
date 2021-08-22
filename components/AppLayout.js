import React from 'react';
import { Layout, Menu } from 'antd';
import PropTypes from 'prop-types'
import Link from 'next/link'
import 'antd/dist/antd.css';
import { Global } from '../styles/mainStyle';
import styles from '../styles/main.module.css';

const { Header, Footer, Content } = Layout;

const AppLayout = ({ children }) => {
    return (
        <Layout>
            <Global/>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' , backgroundColor : "white", boxShadow:"1px 1px 10px rgb(0 0 0 / 15%)"}}>
                <Menu style={{ width: '80%', justifyContent: 'center', margin:"0 auto"}} mode="horizontal">
                    <Menu.Item key="1">
                        <Link href='/' >
                            <a>찜질방 소개</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link href='/restaurant' >
                            <a>허브식당</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link href='/accomodate' >
                            <a>민박</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link href='/qna' >
                            <a>자주하는 질문</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link href='/location' >
                            <a>오시는 길</a>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>

            <Content className={styles.content}>
                {children}
            </Content>

            <Footer style={{ textAlign: 'center' , backgroundColor:"gray"}}>풋터 예시</Footer>
        </Layout>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;