import { FC } from 'react'
import Styles from './HeaderFC.module.css'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Button, theme } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { MyRootState } from '../../store/store'
import { setSidebarIsActive } from '../../slices/sideSlice';
import { useMediaQuery } from 'react-responsive';


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

    const handleToggleSidebar = () => {
        setCollapsed(!collapsed)
        if (isMobileScreen) {
            dispatch(setSidebarIsActive(!sidebarIsActive));
        }
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
            <h2>Quick Brackets</h2>
        </Header>
    )
}

export default HeaderFC