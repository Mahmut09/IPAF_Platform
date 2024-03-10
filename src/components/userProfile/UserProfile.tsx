import { FC } from 'react'
import Styles from './UserProfile.module.css'
import MainInfo from './mainInfo/MainInfo'
import ProfileAchievement from './profileAchievement/ProfileAchievement'
import ProfileInfo from './profileInfo/ProfileInfo'
import Authorization from '../authorization/Authorization'
import { useSelector } from 'react-redux'
import { MyRootState } from '../../store/store'

const infoData = [
    {
        id: 1,
        title: "Age",
        value: "5.5",
        type: "years",
    },
    {
        id: 2,
        title: "Total Experience",
        value: "25",
        type: "years",
    },
    {
        id: 3,
        title: "Age",
        value: "5.5",
        type: "years",
    },
];

const UserProfile: FC = () => {
    const isAuth = useSelector((state: MyRootState) => state.isAuth.value);
    console.log(isAuth);

    return (
        isAuth ?
            <div className={Styles.container}>
                <MainInfo />
                <ProfileAchievement />
                <div className={`${Styles.block} ${Styles.stats}`}></div>

                {infoData.map(item => (
                    <ProfileInfo
                        key={item.id}
                        title={item.title}
                        value={item.value}
                        type={item.type}
                    />
                ))}
            </div>
            :
            <Authorization />
    )
}

export default UserProfile