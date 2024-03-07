import { FC } from 'react'
import Styles from './UserProfile.module.css'
import UserIcon from '../../assets/User.png'
import {
    FlagOutlined,
    MailOutlined,
    PhoneOutlined,
} from '@ant-design/icons';

import AchivementImg from '../../assets/Achivement.png'
import AchivementImg1 from '../../assets/Achivement1.png'
import AchivementImg2 from '../../assets/Achivement2.png'
import AchivementImg3 from '../../assets/Achivement3.png'


const UserProfile: FC = () => {
    return (
        <div className={Styles.container}>
            <div className={`${Styles.block} ${Styles.avatar}`}>
                <h2>Marat Altay</h2>
                <img src={UserIcon} alt="user-icon" />
                <p>
                    “I am a UX designer for over 5 years by profession and an entrepreneur by heart. I see myself as an eager learner, with an urge to explore and try out new experiences”
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
            <div className={`${Styles.block} ${Styles.achievement}`}>
                <h4>Pesonal Journey</h4>
                <ul className={Styles.achievementsList}>
                    <li>
                        <img src={AchivementImg} alt="#" />
                        <h5>Art Prefect</h5>
                        <p>Becam an Art-Prefect in Student Council</p>
                        <span>Mar 2024</span>
                    </li>
                    <li>
                        <img src={AchivementImg1} alt="#" />
                        <h5>Art Prefect</h5>
                        <p>Becam an Art-Prefect in Student Council</p>
                        <span>Mar 2024</span>
                    </li>
                    <li>
                        <img src={AchivementImg2} alt="#" />
                        <h5>Art Prefect</h5>
                        <p>Becam an Art-Prefect in Student Council</p>
                        <span>Mar 2024</span>
                    </li>
                    <li>
                        <img src={AchivementImg3} alt="#" />
                        <h5>Art Prefect</h5>
                        <p>Becam an Art-Prefect in Student Council</p>
                        <span>Mar 2024</span>
                    </li>
                </ul>
            </div>
            <div className={`${Styles.block} ${Styles.stats}`}></div>
            <div className={`${Styles.block} ${Styles.info}`}>
                <h4>Age</h4>
                <div>
                    <span>25</span> years
                </div>
            </div>
            <div className={`${Styles.block} ${Styles.info}`}>
                <h4>Total Experience</h4>
                <div>
                    <span>5.5</span> years
                </div>
            </div>
            <div className={`${Styles.block} ${Styles.info}`}>
                <h4>Age</h4>
                <div>
                    <span>25</span> years
                </div>
            </div>
        </div>
    )
}

export default UserProfile