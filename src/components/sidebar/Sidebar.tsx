import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
    HomeOutlined,
    CalendarOutlined,
    UserOutlined,
    PlusCircleOutlined,
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
        {
            key: '4',
            icon: <PlusCircleOutlined />,
            label: 'Create Tournament',
            link: '/createTournament',
        },
    ];

    const menuItems = navItems.map(item => ({
        key: item.key,
        icon: item.icon,
        label: <Link to={item.link}>{item.label}</Link>,
    }));

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
                items={menuItems}
            />
        </Sider>
    )
}

export default Sidebar
