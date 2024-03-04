import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

interface NavItem {
    key: string;
    icon: JSX.Element;
    label: string;
    link: string;
}

interface NavProps {
    collapsed: boolean;
}

const Nav: FC<NavProps> = ({ collapsed }) => {
    const navItems: NavItem[] = [
        {
            key: '1',
            icon: <UserOutlined />,
            label: 'nav 1',
            link: '/',
        },
        {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'nav 2',
            link: '/tournaments',
        },
        {
            key: '3',
            icon: <UploadOutlined />,
            label: 'nav 3',
            link: '/',
        },
    ];

    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
        >
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
            >
                {navItems.map(item => (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.link}>{item.label}</Link>
                    </Menu.Item>
                ))}
            </Menu>

        </Sider>
    )
}

export default Nav
