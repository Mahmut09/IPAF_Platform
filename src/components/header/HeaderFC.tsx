import { FC } from 'react'
import Styles from './HeaderFC.module.css'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Button, theme } from 'antd';


const { Header } = Layout;

interface HeaderProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}

const HeaderFC: FC<HeaderProps> = ({ collapsed, setCollapsed }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Header 
            className={Styles.header}
            style={{ background: colorBgContainer }}
        >
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
                className={Styles.btn}
            />
            <h2>IPAF Platform</h2>
        </Header>
    )
}

export default HeaderFC