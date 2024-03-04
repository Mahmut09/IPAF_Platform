import React, { FC, useState } from 'react'
import { Layout, theme } from 'antd';
import Sidebar from '../sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import HeaderFC from '../header/HeaderFC';

const { Content } = Layout;

const Main: FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Sidebar collapsed={collapsed} />
            <Layout>
                <HeaderFC setCollapsed={setCollapsed} collapsed={collapsed}/>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}

export default Main