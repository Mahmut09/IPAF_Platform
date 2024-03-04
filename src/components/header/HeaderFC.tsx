import React, { FC, useState } from 'react'
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
        <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />
        </Header>
    )
}

export default HeaderFC