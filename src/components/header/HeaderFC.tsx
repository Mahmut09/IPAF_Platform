import { FC } from 'react'
import Styles from './HeaderFC.module.css'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { Layout, Button, theme } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { MyRootState } from '../../store/store'
import { setSidebarIsActive } from '../../slices/sideSlice';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';
import { setIsAuthenticated } from '../../slices/authSlice';


const { Header } = Layout;

interface HeaderProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}

const HeaderFC: FC<HeaderProps> = ({ collapsed, setCollapsed }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const dispatch = useDispatch();

    const isMobileScreen = useMediaQuery({ maxWidth: 425 });

    const sidebarIsActive = useSelector((state: MyRootState) => state.sidebarIsActive.value);
    const serverURL = useSelector((state: MyRootState) => state.serverURL.value);

    const handleToggleSidebar = () => {
        setCollapsed(!collapsed)
        if (isMobileScreen) {
            dispatch(setSidebarIsActive(!sidebarIsActive));
        }
    }

    const handleLogout = () => {
        axios.post(`${serverURL}/auth/logout`, null, {
            headers: {
                "accept": "application/json",
            },
            withCredentials: true,
        }).then(() => {
            dispatch(setIsAuthenticated(false));
        })
    }

    return (
        <Header
            className={Styles.header}
            style={{ background: colorBgContainer }}
        >
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => {
                    handleToggleSidebar()
                }}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
                className={Styles.btn}
            />
            <div className={Styles.headerRow}>
                <h2>Quick Brackets</h2>
                <Button
                    type="primary"
                    icon={<LogoutOutlined />}
                    onClick={handleLogout}
                >
                    Выйти
                </Button>
            </div>
        </Header>
    )
}

export default HeaderFC