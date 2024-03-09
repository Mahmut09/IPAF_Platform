import { FC } from 'react'
import Styles from '../UserProfile.module.css'

import AchivementImg from '../../../assets/Achivement.png'
import AchivementImg1 from '../../../assets/Achivement1.png'
import AchivementImg2 from '../../../assets/Achivement2.png'
import AchivementImg3 from '../../../assets/Achivement3.png'

const ProfileAchievement: FC = () => {
    return (
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
    )
}

export default ProfileAchievement