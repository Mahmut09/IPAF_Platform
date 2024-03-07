import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
    HomeOutlined,
    CalendarOutlined,
    UserOutlined,
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
    setCollapsed: (collapsed: boolean) => void;
}


const Sidebar: FC<NavProps> = ({ collapsed, setCollapsed }) => {
    const navItems: NavItem[] = [
        {
            key: '3',
            icon: <UserOutlined />,
            label: 'Profile',
            link: '/profile',
        },
        {
            key: '1',
            icon: <HomeOutlined />,
            label: 'Home',
            link: '/',
        },
        {
            key: '2',
            icon: <CalendarOutlined />,
            label: 'Tournaments',
            link: '/tournaments',
        },
    ];


    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            breakpoint='md'
            onBreakpoint={(broken) => setCollapsed(broken)}
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

export default Sidebar
