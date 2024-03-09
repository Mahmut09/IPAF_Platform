import { FC } from 'react'
import UserIcon from '../../../assets/User.png'
import Styles from '../UserProfile.module.css'

import {
    FlagOutlined,
    MailOutlined,
    PhoneOutlined,
} from '@ant-design/icons';

const MainInfo: FC = () => {
    return (
        <div className={`${Styles.block} ${Styles.avatar}`}>
            <h2>Marat Altay</h2>
            <img src={UserIcon} alt="user-icon" />
            <p>
                I am a UX designer for over 5 years by profession and an entrepreneur by heart.
            </p>
            <ul className={Styles.avatarList}>
                <li>
                    <FlagOutlined /> Kazakhstan
                </li>
                <li>
                    <MailOutlined /> bhatiajasbir1612@gmail.com
                </li>
                <li>
                    <PhoneOutlined /> +7 (777) 777-77-77
                </li>
            </ul>
        </div>
    )
}

export default MainInfo