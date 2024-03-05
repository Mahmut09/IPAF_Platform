import { FC, useState } from 'react'
import { Layout, theme } from 'antd';
import Sidebar from '../sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import HeaderFC from '../header/HeaderFC';
import Styles from './Main.module.css'

const { Content } = Layout;

const Main: FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout className={Styles.main} id={Styles.main}>
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            <Layout id={Styles.layout}>
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